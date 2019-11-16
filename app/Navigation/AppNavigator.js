import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Colors } from '../Utils/Colors';
import { Styles } from './AppNavigator.style';
import { fromRight } from '../Utils/Transition';
import QuranList from '../Containers/QuranListPage/QuranList.container';
import QuranDetail from '../Containers/QuranDetailPage/QuranDetail.container';

const AppStack = createStackNavigator(
  {
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
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    swipeEnabled: false,
    transitionConfig: () => fromRight(),
  },
);

const AppContainer = createAppContainer(AppStack);

export default AppContainer;
