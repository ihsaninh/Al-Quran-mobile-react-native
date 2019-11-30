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

  goToDetailpage = data => () => {
    const { navigation } = this.props;
    navigation.navigate(Routes.QuranDetail, { data });
  };

  renderCardContent = ({ data }) => {
    return (
      <CardSurahList
        surahNumber={data?.id}
        surahText={data?.surat_text}
        surahName={data?.surat_name}
        surahMean={data?.surat_terjemahan}
        surahAyat={data?.count_ayat}
        onPress={this.goToDetailpage(data)}
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
