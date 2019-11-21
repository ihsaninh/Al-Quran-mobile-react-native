import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Styles } from './CardSurahList.style';

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
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
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
    </TouchableOpacity>
  );
};

export { CardSurahList };
