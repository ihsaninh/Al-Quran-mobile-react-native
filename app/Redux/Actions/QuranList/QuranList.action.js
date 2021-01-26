import axios from 'axios';

import { quranList } from '../../../Utils/EndPoints';
import {
  REQ_QURAN_LIST,
  REQ_QURAN_LIST_SUCCESS,
  REQ_QURAN_LIST_FAILED
} from '../../ActionTypes';

const getQuranList = () => async (dispatch) => {
  dispatch({ type: REQ_QURAN_LIST });
  try {
    const response = await axios.get(quranList);
    dispatch({
      type: REQ_QURAN_LIST_SUCCESS,
      payload: response?.data?.data
    });
  } catch (error) {
    dispatch({
      type: REQ_QURAN_LIST_FAILED,
      error: 'Request Surah gagal. Mohon Periksa kembali koneksi internet Anda'
    });
  }
};

export { getQuranList };
