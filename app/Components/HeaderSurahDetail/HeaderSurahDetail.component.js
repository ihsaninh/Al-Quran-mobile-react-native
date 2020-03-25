import React from 'react';
import { Text, View } from 'react-native';

import { Styles } from './HeaderSurahDetail.style';

const HeaderSurahDetail = ({
  suratName,
  suratArabic,
  suratTranslate,
  countAyat,
}) => {
  return (
    <View>
      <Text style={Styles.headerTitle}>
        {suratName} ({suratArabic})
      </Text>
      <Text style={Styles.headerSubtitle}>
        {suratTranslate} - {countAyat} Ayat
      </Text>
    </View>
  );
};

export { HeaderSurahDetail };
