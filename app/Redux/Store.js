import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { appReducer } from './Reducers';

const middleware = [thunk];

const config = {
  key: 'root',
  storage: AsyncStorage,
  debug: true,
  whitelist: ['userReducer']
};

if (__DEV__) {
  middleware.push(createLogger());
}

const reducers = persistReducer(config, appReducer);
const enhancers = [applyMiddleware(...middleware)];
const persistConfig = { enhancers };

const store = createStore(reducers, undefined, compose(...enhancers));

const persistor = persistStore(store, persistConfig, () => {});
const configureStore = () => {
  return { persistor, store };
};

export { store, configureStore };
