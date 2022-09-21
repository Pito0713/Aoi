import React from 'react';
import * as RN from 'react-native';
import * as UI from 'react-native-ui-lib';

import { useDispatch } from 'react-redux';
const ListItme = () => {
  const dispatch = useDispatch()
  const logOut = () => {
    dispatch({
        type: 'SET_TOKEN',
        payload: false,
      })
  }
  return (
    <UI.View>
      <UI.ListItem
        activeOpacity={0.3}
        onPress={() => RN.Alert.alert(`pressed on order `)}
      >
        <UI.ListItem.Part style={styles.border}>
          <UI.Text>設定</UI.Text>
        </UI.ListItem.Part>
      </UI.ListItem>
      <UI.ListItem
        activeOpacity={0.3}
        onPress={() => RN.Alert.alert(`pressed on order `)}
      >
        <UI.ListItem.Part style={styles.border}>
          <UI.Text>設定5555</UI.Text>
        </UI.ListItem.Part>
      </UI.ListItem>
      <UI.ListItem
        activeOpacity={0.3}
        onPress={() => logOut()}
      >
        <UI.ListItem.Part style={styles.border}>
          <UI.Text text60L>登出</UI.Text>
        </UI.ListItem.Part>
      </UI.ListItem>
    </UI.View>
  );
}

const styles = RN.StyleSheet.create({
  border: {
    borderBottomWidth: RN.StyleSheet.hairlineWidth,
    borderColor: 'black',
    width: '100%',
    justifyContent: 'center',
    paddingLeft: 20
  }
});

export default ListItme