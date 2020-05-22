import {
  REQ_QURAN_DETAIL,
  REQ_QURAN_DETAIL_SUCCESS,
  REQ_QURAN_DETAIL_FAILURE,
} from '../../Actions/Types';

const initialState = {
  actionStatus: '',
  data: {},
  error: false,
  errorMessage: '',
  loading: false,
  refreshing: false,
};

const QuranDetail = (state = initialState, action) => {
  switch (action.type) {
    case REQ_QURAN_DETAIL:
      return {
        ...state,
        actionStatus: REQ_QURAN_DETAIL,
        error: false,
        errorMessage: '',
        loading: true,
        refreshing: true,
        data: initialState.data,
      };
    case REQ_QURAN_DETAIL_SUCCESS:
      return {
        ...state,
        actionStatus: REQ_QURAN_DETAIL_SUCCESS,
        data: action.payload,
        error: false,
        loading: false,
        refreshing: false,
      };
    case REQ_QURAN_DETAIL_FAILURE:
      return {
        ...state,
        actionStatus: REQ_QURAN_DETAIL_FAILURE,
        error: true,
        errorMessage: action.error,
        loading: false,
        refreshing: false,
        data: initialState.data,
      };
    default:
      return state;
  }
};

export { QuranDetail };
