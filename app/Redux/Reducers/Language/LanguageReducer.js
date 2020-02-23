import { SET_LANG_ID, SET_LANG_EN, config } from '../utils/constants';

const initialState = {
  language: config.LANGUAGE.ID,
};

const language = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANG_EN:
      return {
        ...state,
        language: action.language,
      };
    case SET_LANG_ID:
      return {
        ...state,
        language: action.language,
      };
    default:
      return state;
  }
};

export default language;
