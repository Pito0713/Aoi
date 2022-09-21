import React from "react";
import * as RN from 'react-native';
import * as UI from 'react-native-ui-lib';
import { useNavigation } from '@react-navigation/native';
import Fillter from './Fillter'

const table = [
  {name: 1},
  {name: 2},
  {name: 3},
  {name: 4},
  {name: 5},
  {name: 6},
  {name: 7},
  {name: 8},
  {name: 9},
  {name: 10},
]
const width = RN.Dimensions.get('window').width
const BageContent = () => {
  const navigation = useNavigation();

  return (
    <>
      <Fillter />
      <RN.ScrollView >
        <RN.SafeAreaView style={styles.safeAreaView}>
        {
          table.map((item,index)=>{
            return(
              <UI.Card 
                height={150}
                width={width/2-18}
                selected={false}
                onPress={() =>navigation.navigate('itemComponent', { names: '222 Join Old The Town Barbershop Official Store. D' })}
                activeOpacity={10}
                margin-8
                borderRadius={5}
                key={index}
              >
                <UI.Text text80 $textDefault key={index}>
                  222 Join Old The Town Barbershop Official Store. Download the Wix app to
                </UI.Text>
              </UI.Card>
            )
          })
        }
        </RN.SafeAreaView>
        <RN.View style={{height: 150}}/>    
      </RN.ScrollView>
    </>
  );
};

const styles = RN.StyleSheet.create({
  safeAreaView:{
    flexWrap:'wrap',
    display:'flex',
    flexDirection:"row"
  },
});

export default BageContent ;