import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import get from 'lodash/get';

import { Basmallah } from '../../Components/Basmallah/Basmallah.component';
import { Loading } from '../../Components/Loading/Loading.component';
import { CardAyatList } from '../../Components/CardAyatList/CardAyatList.component';
import { Separator } from '../../Components/Separator/Separator.component';
import { Constants } from '../../Utils/Constants';
import { keyExtractor } from '../../Utils/Helper';
import { Styles } from './QuranDetail.style';
import { Colors } from '../../Themes/Colors';

class QuranDetail extends Component {
  static navigationOptions = ({
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
      headerTintColor: Colors.black,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };

  componentDidMount() {
    this.renderDetailSurah();
  }

  renderDetailSurah = async () => {
    const { getDetailQuran, navigation } = this.props;
    const surahId = get(navigation, 'state.params.dataSurah.id', '');
    const countAyat = get(navigation, 'state.params.dataSurah.count_ayat', '');

    const payload = {
      surahId,
      countAyat,
    };

    await getDetailQuran(payload);
  };

  listHeaderComponent = () => {
    const { navigation } = this.props;
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

  renderCardContent = ({ item }) => {
    return (
      <CardAyatList
        ayatNumber={item?.aya_number}
        ayatText={item?.aya_text}
        ayatTranslate={item?.translation_aya_text}
      />
    );
  };

  render() {
    const { dataAyat, refreshing, isLoading } = this.props;

    return isLoading ? (
      <Loading />
    ) : (
      <FlatList
        data={dataAyat}
        keyExtractor={keyExtractor}
        renderItem={this.renderCardContent}
        refreshing={refreshing}
        onRefresh={this.renderDetailSurah}
        ItemSeparatorComponent={Separator}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={this.listHeaderComponent}
      />
    );
  }
}

export default QuranDetail;
