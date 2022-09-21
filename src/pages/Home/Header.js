import { t } from "i18next";
import React from "react";
import * as RN from 'react-native';
import * as UI from 'react-native-ui-lib';

const Header = () => {
  return (
    <>
      <UI.View style={styles.container}>
        <UI.TouchableOpacity style={styles.iconContainer} onPress={()=>{console.log(123)}} >
          <RN.Image
            source={require('../../../assets/user.png')}
            style={{width:40,height:40}}
          />
          <UI.Text>{t('member')}</UI.Text>
        </UI.TouchableOpacity>
        <UI.View>
          <UI.Text>{'ID :' + '4545646'}</UI.Text>
        </UI.View>
      </UI.View>
    </>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    padding: 12,
    borderWidth: 1,
    margin: 4,
    borderRadius: 10,
    flexDirection: 'row'
  },
  iconContainer: {
    justifyContent:'center',
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 5
  }
});

export default Header ;