import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CustomTabTar } from '../../Components/CustomTabBar/View/CustomTabBar.view';

import { Quran, PrayerTime, Hadist } from '../ScreenConfigs';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabTar {...props} />}>
      <Tab.Screen name="Quran" component={Quran} />
      <Tab.Screen name="Hadist" component={Hadist} />
      <Tab.Screen name="PrayerTime" component={PrayerTime} />
    </Tab.Navigator>
  );
};

export { MainTabNavigator };
