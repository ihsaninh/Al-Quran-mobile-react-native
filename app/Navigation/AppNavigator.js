import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Colors } from '../Themes/Colors';
import { fromRight } from '../Utils/Transition';
import QuranList from '../Containers/QuranListPage/QuranList.container';
import QuranDetail from '../Containers/QuranDetailPage/QuranDetail.container';
import SplashScreen from '../Containers/SplashScreenPage/SplashScreen.component';

const AppStack = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
    },
    QuranList: {
      screen: QuranList,
      navigationOptions: {
        title: 'Al-Quran Mobile',
      },
    },
    QuranDetail: {
      screen: QuranDetail,
      navigationOptions: {
        headerStyle: {
          backgroundColor: Colors.primary,
          elevation: 0,
        },
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
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
