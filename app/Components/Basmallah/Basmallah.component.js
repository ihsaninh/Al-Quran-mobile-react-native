import React from 'react';
import { View, Text } from 'react-native';

import { Styles } from './Basmallah.styles';
import { Separator } from '../../Components/Separator/Separator.component';

const dataBasmallah = require('../../Data/Basmallah.json');

const Basmallah = () => {
  return (
    <View style={Styles.CardStyle}>
      <View>
        <Text style={Styles.descTextArabic}>{dataBasmallah.ayat_arab}</Text>
      </View>
      <Separator />
    </View>
  );
};

export { Basmallah };
