import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Colors } from '../Themes/Colors';
import { Styles } from './AppNavigator.style';
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
        headerLeft: (
          <View style={Styles.headerTitleText}>
            <Icon name="book" size={30} color={Colors.white} />
          </View>
        ),
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
