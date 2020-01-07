import React, { Component } from 'react';
import { View } from 'react-native';

import { Styles } from './SplashScreen.style';
import { Routes } from '../../Navigation/Routes';
import { resetNavigationTo } from '../../Utils/Navigations';
import { isNetworkConnected } from '../../Utils/Helper';

class SplashScreenPage extends Component {
  componentDidMount() {
    this.redirectPage();
  }

  redirectPage = () => {
    this.navigate(Routes.QuranList);
  };

  navigate = async screen => {
    const { navigation } = this.props;

    const resetNavigation = resetNavigationTo(screen);
    try {
      await isNetworkConnected();
      setTimeout(() => {
        navigation.dispatch(resetNavigation);
      }, 1000);
    } catch (error) {
      alert('offline');
    }
  };

  render() {
    return <View style={Styles.container} />;
  }
}

export default SplashScreenPage;
