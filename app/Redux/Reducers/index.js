import { combineReducers } from 'redux';

import { QuranList } from '../Reducers/QuranList/QuranListReducer';
import { QuranDetail } from '../Reducers/QuranDetail/QuranDetailReducer';

const appReducer = combineReducers({
  quranList: QuranList,
  qurandetail: QuranDetail,
});

export { appReducer };
