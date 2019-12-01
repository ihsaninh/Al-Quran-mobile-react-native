import {
  REQ_QURAN_LIST,
  REQ_QURAN_LIST_SUCCESS,
  REQ_QURAN_LIST_FAILURE,
} from '../../Actions/Types';

const initialState = {
  actionStatus: '',
  data: {},
  error: '',
  loading: false,
  refreshing: false,
};

const QuranList = (state = initialState, action) => {
  switch (action.type) {
    case REQ_QURAN_LIST:
      return {
        ...state,
        actionStatus: REQ_QURAN_LIST,
        error: '',
        loading: true,
        refreshing: true,
      };
    case REQ_QURAN_LIST_SUCCESS:
      return {
        ...state,
        actionStatus: REQ_QURAN_LIST_SUCCESS,
        data: action.payload,
        loading: false,
        refreshing: false,
      };
    case REQ_QURAN_LIST_FAILURE:
      return {
        ...state,
        actionStatus: REQ_QURAN_LIST_FAILURE,
        error: action.error,
        loading: false,
        refreshing: false,
      };
    default:
      return { ...state };
  }
};

export { QuranList };
