import {
  REQ_QURAN_DETAIL,
  REQ_QURAN_DETAIL_SUCCESS,
  REQ_QURAN_DETAIL_FAILED
} from '../../ActionTypes';

const initialState = {
  data: {},
  error: false,
  errorMessage: '',
  loading: false
};

const quranDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQ_QURAN_DETAIL:
      return {
        ...state,
        error: false,
        errorMessage: '',
        loading: true
      };
    case REQ_QURAN_DETAIL_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false
      };
    case REQ_QURAN_DETAIL_FAILED:
      return {
        ...state,
        error: true,
        errorMessage: action.error,
        loading: false
      };
    default:
      return state;
  }
};

export { quranDetailReducer };
