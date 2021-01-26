import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { Styles } from '../Style/QuranList.styles';

const QuranList = ({ data, onPress }) => {
  return (
    <Pressable
      style={Styles.listSurahContainer}
      onPress={onPress}
      android_ripple={{ color: 'rgba(0,0,0,0.1)' }}>
      <View style={Styles.listSurahContent}>
        <View style={Styles.versesNumberContainer}>
          <View style={Styles.versesNumberWrap}>
            <Text style={Styles.versesNumber}>{data?.number}</Text>
          </View>
        </View>
        <View style={Styles.surahNameContainer}>
          <Text style={Styles.surahName}>
            {data?.name?.transliteration?.id}
          </Text>
          <Text style={Styles.surahInfo}>
            {data?.revelation?.id} • {data?.numberOfVerses} ayat
          </Text>
        </View>
        <View style={Styles.surahArabicContainer}>
          <Text style={Styles.surahArabic}>{data?.name?.short}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export { QuranList };
