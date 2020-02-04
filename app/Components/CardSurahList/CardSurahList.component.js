import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableRipple } from 'react-native-paper';

import { Styles } from './CardSurahList.style';
import { Colors } from '../../Themes/Colors';

const CardSurahList = props => {
  const {
    onPress,
    surahNumber,
    surahText,
    surahName,
    surahMean,
    surahAyat,
  } = props;
  return (
    <TouchableRipple
      onPress={onPress}
      rippleColor={Colors.rippleColor}
      centered>
      <View style={Styles.CardStyle}>
        <View style={Styles.cardContainer}>
          <View style={Styles.numberCircleContainer}>
            <View style={Styles.NumberCircle}>
              <Text style={Styles.textNumber}>{surahNumber}</Text>
            </View>
          </View>
          <View style={Styles.descContainer}>
            <View style={Styles.descSurah}>
              <Text style={Styles.descTitle}>{surahName}</Text>
              <Text style={Styles.bracketLeft}>(</Text>
              <Text style={Styles.descArab}>{surahText}</Text>
              <Text style={Styles.bracketRight}>)</Text>
            </View>
            <Text style={Styles.descSubTitleTranslate}>
              Terjemahan: {surahMean}
            </Text>
            <Text style={Styles.descSubTitleAyat}>
              Jumlah Ayat: {surahAyat}
            </Text>
          </View>
          <View style={Styles.goToDetailContainer}>
            <Icon
              name="keyboard-arrow-right"
              size={30}
              color="grey"
              style={Styles.expandIconStyle}
            />
          </View>
        </View>
      </View>
    </TouchableRipple>
  );
};

export { CardSurahList };
