import React, { useEffect, useCallback } from 'react';
import { View, Alert, BackHandler } from 'react-native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import { Routes } from '../../Navigation/Routes';
import { resetNavigationTo } from '../../Utils/Navigations';
import { isNetworkConnected } from '../../Utils/Helper';
import { setLang } from '../../Redux/Actions/Language/Language';
import { changeLanguage } from '../../Utils/Translation';
import { Constants } from '../../Utils/Constants';

const SplashScreenPage = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    redirectPage();
  }, [redirectPage]);

  useEffect(() => {
    setLanguage();
  }, [setLanguage]);

  const setLanguage = useCallback(async () => {
    const userLanguage = await AsyncStorage.getItem('userLanguage');

    switch (userLanguage) {
      case 'id':
        changeLanguage(Constants.LANGUAGE.ID);
        dispatch(setLang(Constants.LANGUAGE.ID));
        break;
      case 'en':
        changeLanguage(Constants.LANGUAGE.EN);
        dispatch(setLang(Constants.LANGUAGE.EN));
        break;
      default:
        changeLanguage(Constants.LANGUAGE.ID);
        dispatch(setLang(Constants.LANGUAGE.ID));
        break;
    }
  }, [dispatch]);

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
