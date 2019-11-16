import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import { QuranList } from './Reducers/QuranList/QuranListReducer';
import { QuranDetail } from './Reducers/QuranDetail/QuranDetailReducer';

const middleware = [thunk];

if (__DEV__) {
  middleware.push(reduxLogger);
}

const appReducer = combineReducers({
  quranList: QuranList,
  qurandetail: QuranDetail,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const store = createStore(rootReducer, applyMiddleware(...middleware));

export { store };
