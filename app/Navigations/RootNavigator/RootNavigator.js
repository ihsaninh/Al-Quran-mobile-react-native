import React from 'react';
import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack';
import BackIcon from 'react-native-vector-icons/Feather';

import { Splash, QuranDetail } from '../ScreenConfigs';
import { MainTabNavigator } from '../MainTabNavigator/MainTabNavigator';
import { FontsFamily } from '../../Themes/Fonts';
import { Colors } from '../../Themes/Colors';

const Stack = createStackNavigator();

const hideShadow = { headerStyle: { elevation: 0 } };
const headerTitleSyle = {
  headerTitleStyle: {
    fontFamily: FontsFamily.bold,
    color: Colors.amethyst,
    fontSize: 22,
    paddingTop: 5
  }
};

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainTab"
      screenOptions={{
        cardShadowEnabled: false,
        ...hideShadow,
        ...headerTitleSyle,
        ...TransitionPresets.SlideFromRightIOS
      }}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainTab"
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuranDetail"
        component={QuranDetail}
        options={({ route: { params } }) => ({
          title: '',
          headerBackImage: () => (
            <BackIcon name="chevron-left" size={30} color={Colors.santasGray} />
          )
        })}
      />
    </Stack.Navigator>
  );
};

export { RootNavigator };
