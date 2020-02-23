import { SET_LANG_ID, SET_LANG_EN, config } from '../utils/constants';

export const setLang = language => ({
  type: language === config.LANGUAGE.EN ? SET_LANG_EN : SET_LANG_ID,
  language,
});
