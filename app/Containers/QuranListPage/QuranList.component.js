import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { getQuranList } from '../../Redux/Actions/QuranList/QuranList';
import { Loading } from '../../Components/Loading/Loading.component';
import { CardSurahList } from '../../Components/CardSurahList/CardSurahList.component';
import { Separator } from '../../Components/Separator/Separator.component';
import { Routes } from '../../Navigation/Routes';
import { keyExtractor } from '../../Utils/Helper';

const QuranList = ({ navigation }) => {
  const dispatch = useDispatch();

  const { dataQuran, isLoading, refreshing } = useSelector(state => ({
    dataQuran: state.quranList.data,
    isLoading: state.quranList.loading,
    refreshing: state.quranList.refreshing,
  }));

  useEffect(() => {
    SplashScreen.hide();
    getDataQuran();
  }, [getDataQuran]);

  const getDataQuran = useCallback(async () => {
    await dispatch(getQuranList());
  }, [dispatch]);

  const goToDetailpage = dataSurah => {
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
