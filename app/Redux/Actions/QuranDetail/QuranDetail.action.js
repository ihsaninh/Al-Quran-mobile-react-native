import axios from 'axios';

import { quranDetail } from '../../../Utils/EndPoints';
import {
  REQ_QURAN_DETAIL,
  REQ_QURAN_DETAIL_SUCCESS,
  REQ_QURAN_DETAIL_FAILED
} from '../../ActionTypes';

const getQuranDetail = (surahId) => async (dispatch) => {
  dispatch({ type: REQ_QURAN_DETAIL });
  try {
    const response = await axios.get(quranDetail(surahId));
    dispatch({
      type: REQ_QURAN_DETAIL_SUCCESS,
      payload: response?.data?.data
    });
  } catch (error) {
    dispatch({
      type: REQ_QURAN_DETAIL_FAILED,
      error: 'Request Surah gagal. Mohon Periksa kembali koneksi internet Anda'
    });
  }
};

export { getQuranDetail };
