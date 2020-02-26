import { combineReducers } from 'redux';

import { QuranList } from '../Reducers/QuranList/QuranListReducer';
import { QuranDetail } from '../Reducers/QuranDetail/QuranDetailReducer';
import { language } from '../Reducers/Language/LanguageReducer';

const appReducer = combineReducers({
  quranList: QuranList,
  qurandetail: QuranDetail,
  language: language,
});

export { appReducer };
