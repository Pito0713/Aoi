import React from "react";
import UrlList from './UrlList'
import  * as UI from 'react-native-ui-lib';

const SellScreen = () => {
  return (
    <>
      <UI.View useSafeArea={true}>
        <UrlList />
      </UI.View>
    </>
  );
};

export default SellScreen ;