import React, { useEffect, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import get from 'lodash/get';

import { Basmallah } from '../../Components/Basmallah/Basmallah.component';
import { Loading } from '../../Components/Loading/Loading.component';
import { CardAyatList } from '../../Components/CardAyatList/CardAyatList.component';
import { Separator } from '../../Components/Separator/Separator.component';
import { Constants } from '../../Utils/Constants';
import { keyExtractor } from '../../Utils/Helper';
import { Styles } from './QuranDetail.style';

const QuranDetail = props => {
  useEffect(() => {
    renderDetailSurah();
  }, [renderDetailSurah]);

  const renderDetailSurah = useCallback(async () => {
    const { getDetailQuran, navigation } = props;
    const surahId = get(navigation, 'state.params.dataSurah.id', '');
    const countAyat = get(navigation, 'state.params.dataSurah.count_ayat', '');

    const payload = {
      surahId,
      countAyat,
    };

    await getDetailQuran(payload);
  }, [props]);

  const listHeaderComponent = () => {
    const { navigation } = props;
    const surahId = get(navigation, 'state.params.dataSurah.id', '');

    switch (surahId) {
      case Constants.DATA_SURAH.AL_FATIHAH:
        return null;
      case Constants.DATA_SURAH.AL_TAUBAH:
        return null;
      default:
        return <Basmallah />;
    }
  };

  const renderCardContent = ({ item }) => {
    return (
      <CardAyatList
        ayatNumber={item?.aya_number}
        ayatText={item?.aya_text}
        ayatTranslate={item?.translation_aya_text}
      />
    );
  };

  const { dataAyat, refreshing, isLoading } = props;

  return isLoading ? (
    <Loading />
  ) : (
    <FlatList
      data={dataAyat}
      keyExtractor={keyExtractor}
      renderItem={renderCardContent}
      refreshing={refreshing}
      onRefresh={renderDetailSurah}
      ItemSeparatorComponent={Separator}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={listHeaderComponent}
    />
  );
};

QuranDetail.navigationOptions = ({
  navigation: {
    state: {
      params: { dataSurah },
    },
  },
}) => {
  const suratName = dataSurah.surat_name;
  const suratArabic = dataSurah.surat_text;
  const suratTranslate = dataSurah.surat_terjemahan;
  const countAyat = dataSurah.count_ayat;
  return {
    headerTitle: (
      <View>
        <Text style={Styles.headerTitle}>
          {suratName} ({suratArabic})
        </Text>
        <Text style={Styles.headerSubtitle}>
          {suratTranslate} - {countAyat} Ayat
        </Text>
      </View>
    ),
  };
};

export default QuranDetail;
