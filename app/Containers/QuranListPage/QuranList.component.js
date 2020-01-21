import React, { useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { Loading } from '../../Components/Loading/Loading.component';
import { CardSurahList } from '../../Components/CardSurahList/CardSurahList.component';
import { Separator } from '../../Components/Separator/Separator.component';
import { Routes } from '../../Navigation/Routes';
import { keyExtractor } from '../../Utils/Helper';

const QuranList = props => {
  useEffect(() => {
    SplashScreen.hide();
    getDataQuran();
  }, [getDataQuran]);

  const getDataQuran = useCallback(async () => {
    const { getQuranList } = props;
    await getQuranList();
  }, [props]);

  const goToDetailpage = dataSurah => {
    const { navigation } = props;
    navigation.navigate(Routes.QuranDetail, { dataSurah });
  };

  const renderCardContent = ({ item }) => {
    return (
      <CardSurahList
        surahNumber={item?.id}
        surahText={item?.surat_text}
        surahName={item?.surat_name}
        surahMean={item?.surat_terjemahan}
        surahAyat={item?.count_ayat}
        onPress={() => goToDetailpage(item)}
      />
    );
  };

  const { dataQuran, isLoading, refreshing } = props;

  return isLoading ? (
    <Loading />
  ) : (
    <FlatList
      data={dataQuran}
      keyExtractor={keyExtractor}
      renderItem={renderCardContent}
      refreshing={refreshing}
      onRefresh={getDataQuran}
      ItemSeparatorComponent={Separator}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default QuranList;
