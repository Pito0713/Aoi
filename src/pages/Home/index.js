import * as React from 'react';
import * as RN from 'react-native';
import * as UI from 'react-native-ui-lib';

import Header from './Header'
import PriceComponent from './PriceComponent'
import Carousel from './Carousel'

import { useDispatch, useSelector } from 'react-redux';
import { DraxProvider, DraxList } from 'react-native-drax';

const table = [
  {name: '一'},
  {name: '二'},
  {name: '三'},
]

const HomeScreen = () => {
  const homePage = useSelector(state => state.homePage)
  const dispatch = useDispatch()

  const [containerData, setContainerData] = React.useState(table);

  const incrementCounter = React.useCallback(
    (item) => dispatch({
      type: 'SET_HOMEPAGE',
      payload: JSON.stringify(item),
    })
  )

  React.useEffect(()=>{
    if (!['',null,undefined].includes(homePage)) {
      const target = JSON.parse(homePage)
      setContainerData(target);
    }
  },[])
  
  return (
    <UI.View useSafeArea={true} style={styles.container}>
      <Header />
      <Carousel />
      <DraxProvider>
        <DraxList
          style={styles.container}
          data={containerData}
          renderItemContent={({ item,index }) => 
            (<PriceComponent name={item.name} key={index}/>)
          }
          onItemReorder={({ fromIndex, toIndex }) => {
            const newData = containerData.slice();
            newData.splice(toIndex, 0, newData.splice(fromIndex, 1)[0]);
            setContainerData(newData);
            incrementCounter(newData)
          }}
          keyExtractor={(item,index) => index}
        />
      </DraxProvider>
    </UI.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default HomeScreen ;