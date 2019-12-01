import {
  REQ_QURAN_DETAIL,
  REQ_QURAN_DETAIL_SUCCESS,
  REQ_QURAN_DETAIL_FAILURE,
} from '../../Actions/Types';

const initialState = {
  actionStatus: '',
  data: {},
  error: '',
  loading: false,
  refreshing: false,
};

const QuranDetail = (state = initialState, action) => {
  switch (action.type) {
    case REQ_QURAN_DETAIL:
      return {
        ...state,
        actionStatus: REQ_QURAN_DETAIL,
        error: '',
        loading: true,
        refreshing: true,
      };
    case REQ_QURAN_DETAIL_SUCCESS:
      return {
        ...state,
        actionStatus: REQ_QURAN_DETAIL_SUCCESS,
        data: action.payload,
        loading: false,
        refreshing: false,
      };
    case REQ_QURAN_DETAIL_FAILURE:
      return {
        ...state,
        actionStatus: REQ_QURAN_DETAIL_FAILURE,
        error: action.error,
        loading: false,
        refreshing: false,
      };
    default:
      return { ...state };
  }
};

export { QuranDetail };
