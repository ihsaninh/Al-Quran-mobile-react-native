import { connect } from 'react-redux';

import QuranDetail from '../View/QuranDetail.view';
import { getQuranDetail } from '../../../Redux/Actions';

const mapStateToProps = ({ quranDetailReducer }) => ({
  data: quranDetailReducer.data,
  isLoading: quranDetailReducer.loading,
  isError: quranDetailReducer.error,
  errorMessage: quranDetailReducer.errorMessage
});

const mapDispatchToProps = (dispatch) => ({
  getQuranDetail: (surahId) => dispatch(getQuranDetail(surahId))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuranDetail);
