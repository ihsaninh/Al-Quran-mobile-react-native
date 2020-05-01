import React from 'react';
import { View, Text } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import I18n from 'i18next';

import { Styles } from './HeaderSurahList.style';
import { Routes } from '../../Navigation/Routes';
import { Colors } from '../../Themes/Colors';

const HeaderComponent = ({ title, navigation }) => {
  let _menu = null;

  const setMenuRef = ref => {
    _menu = ref;
  };

  const hideMenu = () => {
    _menu.hide();
  };

  const showMenu = () => {
    _menu.show();
  };

  const renderButton = () => {
    return (
      <TouchableRipple onPress={showMenu} rippleColor={Colors.rippleColor}>
        <Icon name="more-vert" size={25} color="black" />
      </TouchableRipple>
    );
  };

  const redirectTo = route => () => {
    hideMenu();
    navigation.navigate(route);
  };

  return (
    <View style={[Styles.headerContainer, Styles.headerWhite]}>
      <Text style={Styles.title}>{title}</Text>
      <TouchableRipple onPress={() => null} rippleColor={Colors.rippleColor}>
        <View style={Styles.viewRowPoint}>
          <Menu ref={setMenuRef} button={renderButton()} animationDuration={0}>
            <MenuItem onPress={redirectTo(Routes.SettingsPage)}>
              {I18n.t('SettingsTitle')}
            </MenuItem>
            <MenuItem onPress={redirectTo(Routes.AboutPage)}>
              {I18n.t('AboutTitle')}
            </MenuItem>
            <MenuDivider />
          </Menu>
        </View>
      </TouchableRipple>
    </View>
  );
};

export { HeaderComponent };
