import React, { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { TouchableRipple, RadioButton } from 'react-native-paper';
import Modal from 'react-native-modal';

import { Styles } from './ModalOptions.style';
import { deviceHeight } from '../../Utils/Helper';

const ModalOptions = props => {
  const [checked, setChecked] = useState('first');
  const { isVisible, onPress, onPressCancel, type } = props;
  return (
    <View style={Styles.container}>
      <Modal
        isVisible={isVisible}
        useNativeDriver
        animationIn="fadeInRight"
        animationOut="fadeOutRight"
        onBackdropPress={onPress}
        backdropOpacity={0.3}
        deviceHeight={deviceHeight}>
        <View style={Styles.modalContainer}>
          <StatusBar
            backgroundColor="rgba(0,0,0,0.3)"
            barStyle="light-content"
            animated
          />
          <View style={Styles.modalTitleContainer}>
            <Text style={Styles.modalTitleText}>{type}</Text>
          </View>
          <View style={Styles.modalOptionsContainer}>
            <TouchableRipple
              onPress={onPress}
              rippleColor="rgba(0, 0, 0, .05)"
              centered>
              <View style={Styles.modalOptionsContent}>
                <Text style={Styles.radioText}>Bahasa Indonesia</Text>
                <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={onPress}
                  color="#009688"
                />
              </View>
            </TouchableRipple>
            <TouchableRipple
              onPress={onPress}
              rippleColor="rgba(0, 0, 0, .05)"
              centered>
              <View style={Styles.modalOptionsContent}>
                <Text style={Styles.radioText}>Bahasa Inggris</Text>
                <RadioButton
                  value="second"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={onPress}
                  color="#009688"
                />
              </View>
            </TouchableRipple>
          </View>
          <View style={Styles.modalButtonContainer}>
            <TouchableRipple
              onPress={onPressCancel}
              rippleColor="rgba(0, 0, 0, .05)"
              centered>
              <Text style={Styles.buttonText}>Batal</Text>
            </TouchableRipple>
          </View>
          <StatusBar />
        </View>
      </Modal>
    </View>
  );
};

export { ModalOptions };
