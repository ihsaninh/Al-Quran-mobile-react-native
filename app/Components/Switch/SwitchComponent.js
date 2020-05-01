import React from 'react';
import { View, Text, Switch } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

import { Styles } from './Switch.style';
import { Colors } from '../../Themes/Colors';

const SwitchComponent = props => {
  const { value, onValueChange, title, description } = props;
  return (
    <TouchableRipple
      onPress={() => null}
      rippleColor={Colors.rippleColor}
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
