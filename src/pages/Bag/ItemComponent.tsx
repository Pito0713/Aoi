import React from "react";
import * as RN from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as UI from 'react-native-ui-lib';
type JsonValue = string | number | boolean | null
type JsonObject = { [Key in string]?: JsonValue  } | undefined

const ItemComponent = () => {
  const route = useRoute()
  const params:JsonObject = route.params;

  const navigation = useNavigation();
  return (
    <>
      <RN.SafeAreaView >
        <UI.View style={styles.container}>
          <UI.TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <RN.Image
              source={require('../../../assets/leftArrow.png')}
              style={{width:30,height:30}}
            />
          </UI.TouchableOpacity>
        </UI.View>
        <UI.View style={styles.imageContainer}>
        </UI.View>
        <UI.View style={styles.imageContent}>
          <UI.Text>{params?.names}</UI.Text>
        </UI.View>
      </RN.SafeAreaView>
    </>
  );
};
const styles = RN.StyleSheet.create({
  container: {
    padding: 12,
    borderWidth: 1,
    margin: 4,
    borderRadius: 10,
  },
  imageContainer: {
    padding: 12,
    borderWidth: 1,
    margin: 30,
    borderRadius: 10,
    height: 250,
  },
  imageContent: {
    padding: 12,
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    height: 300,
  }
});

export default ItemComponent ;