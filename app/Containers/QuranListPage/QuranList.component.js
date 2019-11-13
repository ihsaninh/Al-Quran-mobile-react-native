import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Loading from '../../Components/LoadingComponent/Loading';
import CardSurahList from '../../Components/CardSurahList/CardSurahList.component';
import { Colors } from '../../Utils/Colors';
import { Routes } from '../../Navigation/Routes';
import { Styles } from './QuranList.style';

class QuranList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      gesturesEnabled: true,
      title: 'Al-Quran Mobile',
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: (
        <View style={Styles.headerTitleText}>
          <Icon name="book" size={30} color={Colors.white} />
        </View>
      ),
    };
  };

  componentDidMount() {
    this.getDataQuran();
  }

  getDataQuran = async () => {
    const { getQuranList } = this.props;
    await getQuranList();
  };

  keyExtractor = (list, index) => index.toString();

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
      <View>
        <FlatList
          data={dataQuran}
          keyExtractor={this.keyExtractor}
          showsHorizontalScrollIndicator={false}
          renderItem={this.renderCardContent}
          refreshing={refreshing}
          onRefresh={this.getDataQuran}
        />
      </View>
    );
  }
}

export default QuranList;
