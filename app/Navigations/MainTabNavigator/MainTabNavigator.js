import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Quran, PrayerTime, Hadist } from '../ScreenConfigs';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Quran" component={Quran} />
      <Tab.Screen name="PrayerTime" component={PrayerTime} />
      <Tab.Screen name="Hadist" component={Hadist} />
    </Tab.Navigator>
  );
};

export { MainTabNavigator };
