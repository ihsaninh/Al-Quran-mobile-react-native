import { combineReducers } from 'redux';

import { quranListReducer } from './QuranList/QuranList.reducer';

const appReducer = combineReducers({
  quranListReducer
});

export { appReducer };
