import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { Loading } from '../../Components/Loading/Loading.component';
import { CardSurahList } from '../../Components/CardSurahList/CardSurahList.component';
import { Separator } from '../../Components/Separator/Separator.component';
import { Routes } from '../../Navigation/Routes';
import { keyExtractor } from '../../Utils/Helper';

class QuranList extends Component {
  componentDidMount() {
    this.getDataQuran();
  }

  getDataQuran = async () => {
    const { getQuranList } = this.props;
    await getQuranList();
  };

  goToDetailpage = dataSurah => () => {
    const { navigation } = this.props;
    navigation.navigate(Routes.QuranDetail, { dataSurah });
  };

  renderCardContent = ({ item }) => {
    return (
      <CardSurahList
        surahNumber={item?.id}
        surahText={item?.surat_text}
        surahName={item?.surat_name}
        surahMean={item?.surat_terjemahan}
        surahAyat={item?.count_ayat}
        onPress={this.goToDetailpage(item)}
      />
    );
  };

  render() {
    const { dataQuran, isLoading, refreshing } = this.props;

    return isLoading ? (
      <Loading />
    ) : (
      <FlatList
        data={dataQuran}
        keyExtractor={keyExtractor}
        renderItem={this.renderCardContent}
        refreshing={refreshing}
        onRefresh={this.getDataQuran}
        ItemSeparatorComponent={Separator}
        showsVerticalScrollIndicator={false}
      />
    );
  }
}

export default QuranList;
