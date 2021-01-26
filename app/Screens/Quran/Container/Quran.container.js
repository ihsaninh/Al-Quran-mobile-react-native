import { connect } from 'react-redux';

import Quran from '../View/Quran.view';
import { getQuranList } from '../../../Redux/Actions';

const mapStateToProps = ({ quranListReducer }) => ({
  data: quranListReducer.data,
  isLoading: quranListReducer.loading,
  isError: quranListReducer.error,
  errorMessage: quranListReducer.errorMessage
});

const mapDispatchToProps = (dispatch) => ({
  getQuranList: () => dispatch(getQuranList())
});

export default connect(mapStateToProps, mapDispatchToProps)(Quran);
