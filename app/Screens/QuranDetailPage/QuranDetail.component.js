import React from 'react';
import { FlatList } from 'react-native';
import get from 'lodash/get';

import { Basmallah } from '../../Components/Basmallah/Basmallah.component';
import { Loading } from '../../Components/Loading/Loading.component';
import { CardAyatList } from '../../Components/CardAyatList/CardAyatList.component';
import { Separator } from '../../Components/Separator/Separator.component';
import { Constants } from '../../Utils/Constants';
import { HeaderSurahDetail } from '../../Components/HeaderSurahDetail/HeaderSurahDetail.component';
import { keyExtractor } from '../../Utils/Helper';

function QuranDetail(props) {
  const { isLoading, navigation, getDetailQuran, dataAyat, refreshing } = props;

  React.useEffect(() => {
    renderDetailSurah();
  }, [renderDetailSurah]);

  const renderDetailSurah = React.useCallback(async () => {
    console.log(navigation);

    const surahId = get(navigation, 'state.params.dataSurah.id');
    const countAyat = get(navigation, 'state.params.dataSurah.count_ayat');

    const payload = {
      surahId,
      countAyat,
    };

    console.log(payload);

    await getDetailQuran(payload);
  }, [getDetailQuran, navigation]);

  const listHeaderComponent = () => {
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

  const renderData = () => {
    return (
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

  return isLoading ? <Loading /> : renderData();
}

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
      <HeaderSurahDetail
        suratName={suratName}
        suratArabic={suratArabic}
        suratTranslate={suratTranslate}
        countAyat={countAyat}
      />
    ),
  };
};

export default QuranDetail;
