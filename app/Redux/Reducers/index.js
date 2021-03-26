import { combineReducers } from 'redux';

import { quranListReducer } from './QuranList/QuranList.reducer';
import { quranDetailReducer } from './QuranDetail/QuranDetail.reducer';

const appReducer = combineReducers({
  quranListReducer,
  quranDetailReducer
});

export { appReducer };
