import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Modal from 'react-native-modal';

import { Styles } from './ModalDialog.style';
import { deviceHeight } from '../../Utils/Helper';

const ModalDialog = ({ isVisible, onPress }) => {
  return (
    <View style={Styles.container}>
      <Modal
        isVisible={isVisible}
        useNativeDriver
        animationIn="fadeIn"
        animationOut="fadeOut"
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
            <Text style={Styles.modalTitleText}>Warning</Text>
          </View>
          <View style={Styles.modalContentContainer}>
            <Text style={Styles.modalContentText}>
              To continue, let your device turn on location, which uses Google's
              location service.
            </Text>
          </View>
          <View style={Styles.modalButtonContainer}>
            <TouchableRipple
              onPress={onPress}
              rippleColor="rgba(0, 0, 0, .05)"
              centered>
              <Text style={Styles.buttonText}>Cancel</Text>
            </TouchableRipple>
            <TouchableRipple
              onPress={onPress}
              rippleColor="rgba(0, 0, 0, .05)"
              centered>
              <Text style={Styles.buttonText}>OK</Text>
            </TouchableRipple>
          </View>
          <StatusBar />
        </View>
      </Modal>
    </View>
  );
};

export { ModalDialog };
