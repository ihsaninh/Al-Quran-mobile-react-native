import React from 'react';
import { View, Text } from 'react-native';
import { Switch, TouchableRipple } from 'react-native-paper';

import { Styles } from './Switch.style';

const SwitchComponent = props => {
  const { value, onValueChange, title, description } = props;
  return (
    <TouchableRipple
      onPress={() => null}
      rippleColor="rgba(0, 0, 0, .05)"
      centered>
      <View style={Styles.settingSwitchContainer}>
        <View style={Styles.descView}>
          <Text style={Styles.settingListTitle}>{title}</Text>
          <Text style={Styles.settingListSubTitle}>{description}</Text>
        </View>
        <View style={Styles.switchView}>
          <Switch value={value} onValueChange={onValueChange} />
        </View>
      </View>
    </TouchableRipple>
  );
};

export { SwitchComponent };
