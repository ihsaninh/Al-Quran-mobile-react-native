import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Styles } from './HeaderSurahList.style';
import { Routes } from '../../Navigation/Routes';

class HeaderComponent extends Component {
  render() {
    const { title } = this.props;
    return (
      <View style={[Styles.headerContainer, Styles.headerWhite]}>
        <Text style={Styles.title}>{title}</Text>
        <TouchableOpacity onPress={this.navigateToQuest}>
          <View style={Styles.viewRowPoint}>
            <TouchableOpacity onPress={() => alert('hello world')}>
              <Icon name="more-vert" size={25} color="black" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export { HeaderComponent };
