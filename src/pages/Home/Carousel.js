import * as React from 'react';
import * as UI from 'react-native-ui-lib';
import * as RN from 'react-native';
const item = [
  {text:1},
  {text:2},
  {text:3},
]
const width = RN.Dimensions.get('window').width;
const height = RN.Dimensions.get('window').height;
const Carousel = () => {
  return (
    <UI.View>
      <UI.Carousel 
        pageWidth={width}
        loop={true}
        autoplay={true}
      >
        {
          item.map((item,index)=>{
          return(
            <UI.View style={styles.carouselContainer} key={index}>
              <UI.Text style={styles.textContainer}>{item.text}</UI.Text>
            </UI.View>
          )
        })}
      </UI.Carousel>
    </UI.View>
  );
}


const styles = RN.StyleSheet.create({
  carouselContainer: {
    height: height/5,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15
  },
  textContainer: {
    margin: 10,
  },
});

export default Carousel;