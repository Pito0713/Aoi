import React from "react";
import ListItme from './ListItme'
import * as UI from 'react-native-ui-lib';

const SettingScreen = () => {
  return (
    <>
      <UI.View useSafeArea={true}>
        <ListItme />
      </UI.View>
    </>
  );
};

export default SettingScreen ;