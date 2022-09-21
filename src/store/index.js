import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

const initState = {
  language: 'zhHans',
  token: '',
  homePage: '',

  account: '',
  password: '',
  rememberInfo: false
};

const setReducer = (state = initState, action) => {
  switch (action.type) {
      case 'SET_LANGUAGE': {
        return { ...state, language: action.payload }
      }
      case 'SET_TOKEN': {
        return { ...state, token: action.payload }
      }
      case 'SET_HOMEPAGE': {
        return { ...state, homePage: action.payload }
      }
      case 'SET_ACCOUNT': {
        return { ...state, account: action.payload }
      }
      case 'SET_PASSWORD': {
        return { ...state, password: action.payload }
      }
      case 'SET_REMEMBERINFO': {
        return { ...state, rememberInfo: action.payload }
      }
      default:
          return state;
      }
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(
  persistConfig, setReducer
)

const store = createStore(persistedReducer); 
const persistor = persistStore(store)

export {store,persistor};