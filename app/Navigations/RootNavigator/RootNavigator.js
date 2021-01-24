import React from 'react';
import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack';

import { Splash } from '../ScreenConfigs';
import { MainTabNavigator } from '../MainTabNavigator/MainTabNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainTab"
      screenOptions={{
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
    </Stack.Navigator>
  );
};

export { RootNavigator };
