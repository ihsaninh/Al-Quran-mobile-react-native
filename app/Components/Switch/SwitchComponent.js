import React from 'react';
import { View, Text, Switch } from 'react-native';

import { Styles } from './Switch.style';

const SwitchComponent = props => {
  const { value, onValueChange, title, description } = props;
  return (
    <View style={Styles.settingSwitchContainer}>
      <View style={Styles.descView}>
        <Text style={Styles.settingListTitle}>{title}</Text>
        <Text style={Styles.settingListSubTitle}>{description}</Text>
      </View>
      <View style={Styles.switchView}>
        <Switch value={value} onValueChange={onValueChange} />
      </View>
    </View>
  );
};

export { SwitchComponent };
