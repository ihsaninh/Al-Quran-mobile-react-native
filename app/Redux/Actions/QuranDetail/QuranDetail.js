import {
  REQ_QURAN_DETAIL,
  REQ_QURAN_DETAIL_SUCCESS,
  REQ_QURAN_DETAIL_FAILURE,
} from '../Types';
import axios from 'axios';
import { quranDetail } from '../../../Utils/EndPoints';
import { Constants } from '../../../Utils/Constants';

const getDetailQuran = payload => async dispatch => {
  const { surahId, countAyat } = payload;
  dispatch({ type: REQ_QURAN_DETAIL });
  try {
    const response = await axios.get(quranDetail(surahId, countAyat));
    if (response?.status === Constants.RESPONSE_CODE.SUCCESS) {
      dispatch({
        type: REQ_QURAN_DETAIL_SUCCESS,
        payload: response?.data?.data,
      });
    } else {
      dispatch({
        type: REQ_QURAN_DETAIL_FAILURE,
        error: 'Request Detail Surah gagal',
      });
    }
  } catch (error) {
    dispatch({
      type: REQ_QURAN_DETAIL_FAILURE,
      error: 'Request Detail Surah gagal',
    });
  }
};

export { getDetailQuran };
