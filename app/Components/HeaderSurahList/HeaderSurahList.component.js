import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

import { Styles } from './HeaderSurahList.style';
import { Routes } from '../../Navigation/Routes';

class HeaderComponent extends Component {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  renderButton = () => {
    return (
      <TouchableRipple onPress={this.showMenu}>
        <Icon name="more-vert" size={25} color="black" />
      </TouchableRipple>
    );
  };

  toAboutPage = () => {
    const { navigation } = this.props;
    this.hideMenu();
    navigation.navigate(Routes.AboutPage);
  };

  render() {
    const { title } = this.props;
    return (
      <View style={[Styles.headerContainer, Styles.headerWhite]}>
        <Text style={Styles.title}>{title}</Text>
        <TouchableRipple onPress={this.navigateToQuest}>
          <View style={Styles.viewRowPoint}>
            <Menu
              ref={this.setMenuRef}
              button={this.renderButton()}
              animationDuration={0}>
              <MenuItem onPress={this.hideMenu}>Pengaturan Aplikasi</MenuItem>
              <MenuItem onPress={this.toAboutPage}>Tentang Aplikasi</MenuItem>
              <MenuDivider />
            </Menu>
          </View>
        </TouchableRipple>
      </View>
    );
  }
}

export { HeaderComponent };
