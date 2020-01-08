import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Colors } from '../Themes/Colors';
import { Strings } from '../Utils/Strings';
import { fromRight } from '../Utils/Transition';
import { HeaderComponent } from '../Components/HeaderSurahList/HeaderSurahList.component';
import { HeaderSurahDetail } from '../Components/HeaderSurahDetail/HeaderSurahDetail.component';
import QuranList from '../Containers/QuranListPage/QuranList.container';
import QuranDetail from '../Containers/QuranDetailPage/QuranDetail.container';
import SplashScreen from '../Containers/SplashScreenPage/SplashScreen.component';
import AboutPage from '../Containers/AboutPage/AboutPage.component';

const AppStack = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
    },
    AboutPage: {
      screen: AboutPage,
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
      navigationOptions: {
        // header: props => <HeaderSurahDetail {...props} />,
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.iron,
        elevation: 0,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    transitionConfig: () => fromRight(600),
  },
);

const AppContainer = createAppContainer(AppStack);

export default AppContainer;
