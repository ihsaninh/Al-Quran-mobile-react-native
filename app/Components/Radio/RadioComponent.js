import React from 'react';
import { View, Text } from 'react-native';
import { TouchableRipple, RadioButton } from 'react-native-paper';

import { Styles } from './Radio.style';

const RadioComponent = props => {
  const { text, onPress, value, status, radioOnpress } = props;
  return (
    <TouchableRipple
      onPress={onPress}
      rippleColor="rgba(0, 0, 0, .05)"
      centered>
      <View style={Styles.modalOptionsContent}>
        <Text style={Styles.radioText}>{text}</Text>
        <RadioButton
          value={value}
          status={status}
          onPress={radioOnpress}
          color="#009688"
        />
      </View>
    </TouchableRipple>
  );
};

export default RadioComponent;
