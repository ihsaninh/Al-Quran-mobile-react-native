import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Styles } from '../Style/CustomTabBar.style';
import { Colors } from '../../../Themes/Colors';

export const CustomTabTar = ({ state, descriptors, navigation }) => {
  return (
    <View style={Styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        let icon = '';
        switch (label) {
          case 'Quran':
            icon = 'book-open';
            break;
          case 'Hadist':
            icon = 'book';
            break;
          case 'PrayerTime':
            icon = 'mosque';
            break;
          default:
            break;
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          });
        };

        return (
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('rgba(0,0,0,0.1)', true)}
            onPress={onPress}
            key={index}
            onLongPress={onLongPress}>
            <View style={Styles.tabBarContent(isFocused)}>
              <Icon
                name={icon}
                size={18}
                color={isFocused ? Colors.white : Colors.amethyst}
              />
            </View>
          </TouchableNativeFeedback>
        );
      })}
    </View>
  );
};
