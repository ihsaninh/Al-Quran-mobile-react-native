import React from 'react';
import { View } from 'react-native';
import QuranList from '../Screens/Quran_list';
import QuranDetail from '../Screens/Quran_detail';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppStack = createStackNavigator(
  {
    QuranList: {
      screen: QuranList,
      navigationOptions: {
        gesturesEnabled: true,
        title: 'Al-Quran Mobile',
        headerStyle: {
          backgroundColor: '#EA3C64',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: (
          // eslint-disable-next-line react-native/no-inline-styles
          <View style={{ marginLeft: 20 }}>
            <Icon name="book" size={30} color="#fff" />
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
      initialRouteName: QuranList,
      resetOnBlur: true,
    },
  },
);

const AppContainer = createAppContainer(AppStack);

export default AppContainer;
