import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CardView from 'react-native-cardview';

import { Styles } from './Basmallah.styles';
import { Separator } from '../../Components/Separator/Separator.component';

class Basmallah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: require('../../Data/Basmallah.json'),
    };
  }

  render() {
    const { data } = this.state;
    return (
      <CardView
        cardElevation={0}
        cardMaxElevation={0}
        cornerRadius={5}
        style={Styles.CardStyle}>
        <View>
          <Text style={Styles.descTextArabic}>{data.ayat_arab}</Text>
        </View>
        <Separator />
      </CardView>
    );
  }
}

export { Basmallah };
