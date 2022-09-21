import React from "react";
import * as RN from 'react-native';
import { APP_TYPE, APP_ENV, APP_VERSION } from '../env/config';
import axios from 'axios';

const AppContext = React.createContext();

/////////////////////////////////////////////////////

const Colors = {
  default: '#000000',
  primary: '#fc9a19',
  lightPrimary: '#ffdfa6',
  // text
  textDefault: '#ffffff',
  //  border
  borderDefault: '#000000',
  borderPrimary: '#fc9a19',
  // buttom
  buttomPrimary: '#ffc04d',
  // input
  inputPrimary: '#d9d9d9',
  // dataTable
  dataTableHeaderPrimary: '#cbcbcb',
  // tab
  tabBackgroundColor: '#ffcf91',
  tabActiveBackgroundColor: '#eb8315',
  tabBarActiveTintColor: '#ffffff',
  tabBarInactiveTintColor: '#000000',
};

/////////////////////////////////////////////////////

const LoadingView = ({ visible }) => {
  return (
    <RN.Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => {}}
    >
      <RN.View style={{
        ...RN.StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}>
        <RN.View style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 30,
          borderRadius: 15,
        }}>
          <RN.ActivityIndicator color={Colors.primary} />
        </RN.View>
      </RN.View>
    </RN.Modal>
  );
};

/////////////////////////////////////////////////////

const AppProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [initialized, setInitialized] = React.useState(false);
  const [appName, setAppName] = React.useState('App');
  const [appVersion, setAppVersion] = React.useState('1.0.0');
  const [appEnv, setAppEnv] = React.useState('dev');

  React.useEffect(() => {
    setInitialized(true);
    
    // env設定
    // axios.defaults.baseURL = URL_DOMAIN;
    // axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

    setAppName(APP_TYPE.NAME);
    setAppVersion(APP_VERSION);
    setAppEnv(APP_ENV.NAME);
    RN.AppState.addEventListener('change', handleAppStateChange);
    return () => {
      RN.AppState.addEventListener('change', handleAppStateChange).remove()
    };
  }, []);

  const logOut = async () => {
    setLoading(true);

    setLoading(false);
  };

  const handleAppStateChange = async (nextAppState) => {
    console.log(nextAppState)
  };

  const value = {
    ///////////////////////
    Colors: Colors,
    loading: loading,
    setLoading: setLoading,
    initialized: initialized,
    setInitialized: setInitialized,
     ///////////////////////
    appName: appName,
    setAppName: setAppName,
    appVersion: appVersion,
    setAppVersion: setAppVersion,
    appEnv: appEnv,
    setAppEnv: setAppEnv,
    logOut: logOut,
     ///////////////////////
  };

  return (
    <AppContext.Provider value={value}>
      <LoadingView visible={loading} />
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider};
