import {
  REQ_QURAN_LIST,
  REQ_QURAN_LIST_SUCCESS,
  REQ_QURAN_LIST_FAILURE,
} from '../Types';
import axios from 'axios';
import { quranList } from '../../../Utils/EndPoints';
import { Constants } from '../../../Utils/Constants';

const getQuranList = () => async dispatch => {
  dispatch({ type: REQ_QURAN_LIST });
  try {
    const response = await axios.get(quranList);
    if (response?.status === Constants.RESPONSE_CODE.SUCCESS) {
      dispatch({
        type: REQ_QURAN_LIST_SUCCESS,
        payload: response?.data?.data,
      });
    } else {
      dispatch({
        type: REQ_QURAN_LIST_FAILURE,
        error: 'Request Surah gagal',
      });
    }
  } catch (error) {
    dispatch({
      type: REQ_QURAN_LIST_FAILURE,
      error: 'Request Surah gagal',
    });
  }
};

export { getQuranList };
