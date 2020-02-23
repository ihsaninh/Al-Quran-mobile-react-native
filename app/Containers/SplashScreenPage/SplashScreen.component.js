import React, { useEffect, useCallback } from 'react';
import { View, Alert, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { Routes } from '../../Navigation/Routes';
import { resetNavigationTo } from '../../Utils/Navigations';
import { isNetworkConnected } from '../../Utils/Helper';
import { changeLanguage } from '../../Utils/Translation';
import { Constants } from '../../Utils/Constants';

const SplashScreenPage = props => {
  useEffect(() => {
    redirectPage();
  }, [redirectPage]);

  useEffect(() => {
    setLanguage();
  }, []);

  const setLanguage = async () => {
    const { setLang } = this.props;
    const userLanguage = await AsyncStorage.getItem('userLanguage');

    switch (userLanguage) {
      case 'id':
        changeLanguage(Constants.LANGUAGE.ID);
        setLang(Constants.LANGUAGE.ID);
        break;
      case 'en':
        changeLanguage(Constants.LANGUAGE.EN);
        setLang(Constants.LANGUAGE.EN);
        break;
      default:
        changeLanguage(Constants.LANGUAGE.ID);
        setLang(Constants.LANGUAGE.ID);
        break;
    }
  };

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
