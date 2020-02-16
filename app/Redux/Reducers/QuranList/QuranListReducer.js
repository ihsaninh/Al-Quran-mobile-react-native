import {
  REQ_QURAN_LIST,
  REQ_QURAN_LIST_SUCCESS,
  REQ_QURAN_LIST_FAILURE,
} from '../../Actions/Types';

const initialState = {
  actionStatus: '',
  data: [],
  error: false,
  errorMessage: '',
  loading: false,
  refreshing: false,
};

const QuranList = (state = initialState, action) => {
  switch (action.type) {
    case REQ_QURAN_LIST:
      return {
        ...state,
        actionStatus: REQ_QURAN_LIST,
        error: false,
        errorMessage: '',
        loading: true,
        refreshing: true,
      };
    case REQ_QURAN_LIST_SUCCESS:
      return {
        ...state,
        actionStatus: REQ_QURAN_LIST_SUCCESS,
        data: action.payload,
        error: false,
        loading: false,
        refreshing: false,
      };
    case REQ_QURAN_LIST_FAILURE:
      return {
        ...state,
        actionStatus: REQ_QURAN_LIST_FAILURE,
        error: true,
        errorMessage: action.error,
        loading: false,
        refreshing: false,
      };
    default:
      return state;
  }
};

export { QuranList };
