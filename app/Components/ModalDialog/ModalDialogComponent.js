import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Modal from 'react-native-modal';

import { Styles } from './ModalDialog.style';
import { Colors } from '../../Themes/Colors';
import { deviceHeight } from '../../Utils/Helper';

const ModalDialog = props => {
  const { isVisible, onPressOke, type, message } = props;
  return (
    <View style={Styles.container}>
      <Modal
        isVisible={isVisible}
        useNativeDriver
        animationIn="fadeInRight"
        animationOut="fadeOutRight"
        backdropOpacity={0.3}
        deviceHeight={deviceHeight}>
        <View style={Styles.modalContainer}>
          <StatusBar
            backgroundColor={Colors.statusbarModal}
            barStyle="light-content"
            animated
          />
          <View style={Styles.modalTitleContainer}>
            <Text style={Styles.modalTitleText}>{type}</Text>
          </View>
          <View style={Styles.modalContentContainer}>
            <Text style={Styles.modalContentText}>{message}</Text>
          </View>
          <View style={Styles.modalButtonContainer}>
            <TouchableRipple
              onPress={onPressOke}
              rippleColor={Colors.rippleColor}
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
