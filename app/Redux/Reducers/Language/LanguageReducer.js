import { Constants } from '../../../Utils/Constants';
import { SET_LANG_EN, SET_LANG_ID } from '../../Actions/Types';

const initialState = {
  language: Constants.LANGUAGE.ID,
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

export { language };
