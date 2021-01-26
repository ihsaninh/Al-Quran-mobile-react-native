import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Styles } from '../Style/Header.style';

const Header = ({ title, onPressSearch }) => {
  return (
    <View style={Styles.headerContainer}>
      <View style={Styles.headerLeftContainer}>
        <Text style={Styles.headerTitle}>{title}</Text>
      </View>
      <TouchableOpacity
        style={Styles.headerRightContainer}
        onPress={onPressSearch}>
        <Icon name="search" size={24} style={Styles.leftIcon} />
      </TouchableOpacity>
    </View>
  );
};

export { Header };
