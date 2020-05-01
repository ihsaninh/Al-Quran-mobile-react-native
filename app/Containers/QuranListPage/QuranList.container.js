import { connect } from 'react-redux';

import QuranList from './QuranList.component';
import { getQuranList } from '../../Redux/Actions/QuranList/QuranList';

const mapStateToProps = state => ({
  data: state.quranList.data,
  isLoading: state.quranList.loading,
  isError: state.quranList.error,
  errorMessage: state.quranList.errorMessage,
  refreshing: state.quranList.refreshing,
});

const mapDispatchToProps = dispatch => ({
  getQuranList: () => dispatch(getQuranList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuranList);
