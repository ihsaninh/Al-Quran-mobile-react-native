import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Modal from 'react-native-modal';
import I18n from 'i18next';

import { Styles } from './ModalOptions.style';
import { deviceHeight } from '../../Utils/Helper';
import { Colors } from '../../Themes/Colors';

const ModalOptions = props => {
  const { isVisible, onPressCancel, type, renderItem } = props;
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
          <View style={Styles.modalOptionsContainer}>{renderItem()}</View>
          <View style={Styles.modalButtonContainer}>
            <TouchableRipple
              onPress={onPressCancel}
              rippleColor={Colors.rippleColor}
              centered>
              <Text style={Styles.buttonText}>{I18n.t('Cancel')}</Text>
            </TouchableRipple>
          </View>
          <StatusBar />
        </View>
      </Modal>
    </View>
  );
};

export { ModalOptions };
