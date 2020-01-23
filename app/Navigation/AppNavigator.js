import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AboutPage from '../Containers/AboutPage/AboutPage.component';
import QuranList from '../Containers/QuranListPage/QuranList.container';
import QuranDetail from '../Containers/QuranDetailPage/QuranDetail.container';
import SettingsPage from '../Containers/SettingsPage/SettingsPage.component';
import SplashScreen from '../Containers/SplashScreenPage/SplashScreen.component';
import { Colors } from '../Themes/Colors';
import { Strings } from '../Utils/Strings';
import { FontType } from '../Themes/Fonts';
import { fromRight } from '../Utils/Transition';
import { HeaderComponent } from '../Components/HeaderSurahList/HeaderSurahList.component';

const AppStack = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
    },
    AboutPage: {
      screen: AboutPage,
      navigationOptions: {
        title: Strings.about,
        headerTitleStyle: {
          fontFamily: FontType.semiBold,
          fontSize: 18,
          marginLeft: 0,
        },
      },
    },
    SettingsPage: {
      screen: SettingsPage,
      navigationOptions: {
        title: Strings.settings,
        headerTitleStyle: {
          // fontFamily: FontType.semiBold,
          fontSize: 18,
          fontWeight: 'bold',
          marginLeft: 0,
        },
      },
    },
    QuranList: {
      screen: QuranList,
      navigationOptions: {
        header: props => (
          <HeaderComponent title={Strings.appTitle} {...props} />
        ),
      },
    },
    QuranDetail: {
      screen: QuranDetail,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.iron,
        elevation: 0,
      },
      headerTintColor: Colors.black,
    },
    transitionConfig: () => fromRight(600),
  },
);

const AppContainer = createAppContainer(AppStack);

export default AppContainer;
