import { Constants } from '../../../Utils/Constants';
import { SET_LANG_EN, SET_LANG_ID } from '../Types';

export const setLang = language => ({
  type: language === Constants.LANGUAGE.EN ? SET_LANG_EN : SET_LANG_ID,
  language,
});
