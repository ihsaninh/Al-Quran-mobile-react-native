import React, { useRef } from 'react';
import { View, Text, Dimensions, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Animated, { Easing } from 'react-native-reanimated';

import { PopUpMenu } from '../../PopUpMenu/View/PopUpMenu.view';
import { Styles } from '../Style/HeaderSearch.style';
import { Colors } from '../../../Themes/Colors';

const { Value, timing } = Animated;
const width = Dimensions.get('window').width;

const HeaderSearch = ({ title, onChangeText, value, onClear, onPressMenu }) => {
  const inputRef = useRef(null);
  const inputTranslateX = useRef(new Value(width)).current;
  const backButtonOpacity = useRef(new Value(0)).current;

  const onFocus = () => {
    const inputTranslateXConfig = {
      duration: 300,
      toValue: 0,
      easing: Easing.inOut(Easing.ease)
    };
    const backButtonOpacityConfig = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease)
    };
    timing(inputTranslateX, inputTranslateXConfig).start();
    timing(backButtonOpacity, backButtonOpacityConfig).start();

    inputRef.current.focus();
  };

  const onBlur = () => {
    const inputTranslateXConfig = {
      duration: 300,
      toValue: width,
      easing: Easing.inOut(Easing.ease)
    };
    const backButtonOpacityConfig = {
      duration: 50,
      toValue: 0,
      easing: Easing.inOut(Easing.ease)
    };

    timing(inputTranslateX, inputTranslateXConfig).start();
    timing(backButtonOpacity, backButtonOpacityConfig).start();

    inputRef.current.blur();
    onClear();
  };

  return (
    <View style={Styles.headerContainer}>
      <Text style={Styles.headerTitle}>{title}</Text>
      <View style={Styles.headerMenu}>
        <Pressable
          onPress={onFocus}
          style={Styles.borderButton}
          android_ripple={{ color: Colors.ripple, borderless: true }}>
          <Icon name="search" size={24} style={Styles.leftIcon} />
        </Pressable>
        <PopUpMenu actions={['Pengaturan', 'Tentang']} onPress={onPressMenu} />
      </View>
      <Animated.View style={Styles.inputBox(inputTranslateX)}>
        <Animated.View style={{ opacity: backButtonOpacity }}>
          <Pressable
            onPress={onBlur}
            style={Styles.backIcon}
            android_ripple={{ color: Colors.ripple, borderless: true }}>
            <Icon name="chevron-left" size={22} color={Colors.santasGray} />
          </Pressable>
        </Animated.View>
        <TextInput
          value={value}
          ref={inputRef}
          style={Styles.input}
          placeholder="Cari Surah"
          onChangeText={onChangeText}
        />
      </Animated.View>
    </View>
  );
};

export { HeaderSearch };
