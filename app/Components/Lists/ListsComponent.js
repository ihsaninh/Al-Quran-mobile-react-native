import React from 'react';
import { View, Text } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

import { Styles } from './ListsComponent.style';

const Lists = props => {
  const { title, description, onPress } = props;
  return (
    <TouchableRipple
      onPress={onPress}
      rippleColor="rgba(0, 0, 0, .05)"
      centered>
      <View style={Styles.settingListContainer}>
        <Text style={Styles.settingListTitle}>{title}</Text>
        <Text style={Styles.settingListSubTitle}>{description}</Text>
      </View>
    </TouchableRipple>
  );
};

export { Lists };
