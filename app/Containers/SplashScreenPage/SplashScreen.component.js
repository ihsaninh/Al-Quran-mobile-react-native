import React, { useEffect, useCallback } from 'react';
import { View, Alert, BackHandler } from 'react-native';

import { Routes } from '../../Navigation/Routes';
import { resetNavigationTo } from '../../Utils/Navigations';
import { isNetworkConnected } from '../../Utils/Helper';

const SplashScreenPage = props => {
  useEffect(() => {
    redirectPage();
  }, [redirectPage]);

  const redirectPage = useCallback(() => {
    navigate(Routes.QuranList);
  }, [navigate]);

  const navigate = useCallback(
    async screen => {
      const { navigation } = props;

      const resetNavigation = resetNavigationTo(screen);
      try {
        await isNetworkConnected();
        setTimeout(() => {
          navigation.dispatch(resetNavigation);
        }, 1000);
      } catch (error) {
        Alert.alert(
          'Peringatan',
          'Nampaknya Anda sedang offline, mohon nyalakan data seluler untuk melanjutkan.',
          [{ text: 'OK', onPress: () => BackHandler.exitApp() }],
          { cancelable: false },
        );
      }
    },
    [props],
  );

  return <View />;
};

export default SplashScreenPage;
