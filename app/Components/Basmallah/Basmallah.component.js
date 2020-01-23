import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Styles } from './Basmallah.styles';
import { Separator } from '../../Components/Separator/Separator.component';
import DataBasmallah from '../../Data/Basmallah.json';

class Basmallah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: require('../../Data/Basmallah.json'),
    };
  }

  render() {
    console.log(DataBasmallah);
    const { data } = this.state;
    return (
      <View style={Styles.CardStyle}>
        <View>
          <Text style={Styles.descTextArabic}>{data.ayat_arab}</Text>
        </View>
        <Separator />
      </View>
    );
  }
}

export { Basmallah };
