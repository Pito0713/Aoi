import DeviceInfo from 'react-native-device-info';
import { AppType, AppEnv } from './AppInformation';

const APP_TYPE = AppType.AoiDemo;
const APP_ENV = AppEnv.DEV;
const APP_VERSION =
  APP_ENV === AppEnv.DEV
    ? DeviceInfo.getVersion()
    : `${APP_ENV.NAME}_${DeviceInfo.getVersion()}`;

export { APP_TYPE, APP_ENV, APP_VERSION };
