import React from 'react';
import { View, Text } from 'react-native';
import HTML from 'react-native-render-html';

import { Styles } from './CardAyatList.style';

const CardAyatList = props => {
  const { ayatNumber, ayatText, ayatTranslate } = props;
  return (
    <View style={Styles.CardStyle}>
      <View style={Styles.cardContainer}>
        <View style={Styles.numberCircleContainer}>
          <View style={Styles.NumberCircle}>
            <Text style={Styles.textNumber}>{ayatNumber}</Text>
          </View>
        </View>
        <View style={Styles.descContainer}>
          <Text style={Styles.descTextRight}>{ayatText}</Text>
          <HTML
            html={ayatTranslate}
            containerStyle={Styles.descTextLeftContainer}
            baseFontStyle={Styles.descTextLeft}
          />
        </View>
      </View>
    </View>
  );
};

export { CardAyatList };
