import { connect } from 'react-redux';

import QuranDetail from './QuranDetail.component';
import { getDetailQuran } from '../../Redux/Actions/QuranDetail/QuranDetail';

const mapStateToProps = state => ({
  dataAyat: state.qurandetail.data,
  isLoading: state.qurandetail.loading,
  refreshing: state.qurandetail.refreshing,
});

const mapDispatchToProps = dispatch => ({
  getDetailQuran: payload => dispatch(getDetailQuran(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuranDetail);
