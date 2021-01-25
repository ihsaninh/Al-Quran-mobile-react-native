import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import OctIcon from 'react-native-vector-icons/Octicons';

import { Styles } from '../Style/Quran.style';
import { Colors } from '../../../Themes/Colors';

class Quran extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderHeader = () => {
    return (
      <View style={Styles.headerContainer}>
        <View style={Styles.headerLeftContainer}>
          <Icon name="align-left" size={26} style={Styles.rightIcon} />
          <Text style={Styles.headerTitle}>Quran App</Text>
        </View>
        <View style={Styles.headerRightContainer}>
          <Icon name="search" size={24} style={Styles.leftIcon} />
        </View>
      </View>
    );
  };

  renderLastRead = () => {
    return (
      <View style={Styles.lastReadContainer}>
        <View style={Styles.lastReadTextContainer}>
          <OctIcon name="book" size={24} color={Colors.amethyst} />
          <Text style={Styles.textLastRead}>Terakhir baca</Text>
        </View>
        <Text style={Styles.textLastReadSurah}>AL-Fatihah</Text>
        <Text style={Styles.textLastReadAyah}>Ayat No: 3</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={Styles.container}>
        {this.renderHeader()}
        {this.renderLastRead()}
      </View>
    );
  }
}

export default Quran;
