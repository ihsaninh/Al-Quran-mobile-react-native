import React from 'react';
import { View, Text } from 'react-native';
import CardView from 'react-native-cardview';
import HTML from 'react-native-render-html';

import { Styles } from './CardAyatList.style';

const CardAyatList = props => {
  const { ayatNumber, ayatText, ayatTranslate } = props;
  return (
    <CardView
      cardElevation={2}
      cardMaxElevation={2}
      cornerRadius={5}
      style={Styles.CardStyle}>
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
    </CardView>
  );
};

export { CardAyatList };
