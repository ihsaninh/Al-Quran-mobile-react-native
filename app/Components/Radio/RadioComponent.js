import React from 'react';
import { View, Text } from 'react-native';
import { TouchableRipple, RadioButton } from 'react-native-paper';

import { Styles } from './Radio.style';
import { Colors } from '../../Themes/Colors';

const RadioComponent = props => {
  const { text, onPress, value, status, radioOnpress } = props;
  return (
    <TouchableRipple
      onPress={onPress}
      rippleColor={Colors.rippleColor}
      centered>
      <View style={Styles.modalOptionsContent}>
        <Text style={Styles.radioText}>{text}</Text>
        <RadioButton
          value={value}
          status={status}
          onPress={radioOnpress}
          color={Colors.persianGreen}
        />
      </View>
    </TouchableRipple>
  );
};

export { RadioComponent };
