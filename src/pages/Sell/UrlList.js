import React from "react";
import * as RN from 'react-native';
import * as UI from 'react-native-ui-lib';

const marketUrl = [
  {url: 'opensea'},
  {url: 'maketImg'},
]

const UrlList = () => {
  return (
    <>
      {marketUrl.map((item, index) => (
          <UI.Drawer
            rightItems={[{text: 'Read', background: '#000000', onPress: () => console.log('read pressed')}]}
            leftItem={{text: 'Delete', background: '#000000', onPress: () => console.log('delete pressed')}}
            key={index}
          >
            <UI.View centerV padding-s4 bg-white style={{height: 60}}>
              <UI.Text text70>{item.url}</UI.Text>
            </UI.View>
          </UI.Drawer>
        ))}
      
    </>
  );
};
const styles = RN.StyleSheet.create({
  container: {
    padding: 12,
    borderWidth: 1,
    margin: 4,
    borderRadius: 10,
  }
});

export default UrlList ;