import React, { Component } from 'react';
import { View } from 'react-native';

import { Styles } from './SplashScreen.style';
import { Routes } from '../../Navigation/Routes';
import { resetNavigationTo } from '../../Utils/Navigations';

class SplashScreenPage extends Component {
  componentDidMount() {
    return this.redirectPage();
  }

  redirectPage = () => {
    this.navigate(Routes.QuranList);
  };

  navigate = screen => {
    const { navigation } = this.props;

    const resetNavigation = resetNavigationTo(screen);
    return navigation.dispatch(resetNavigation);
  };

  render() {
    return <View style={Styles.container} />;
  }
}

export default SplashScreenPage;
