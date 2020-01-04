import React, { Component } from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Loading } from '../../Components/Loading/Loading.component';
import { CardSurahList } from '../../Components/CardSurahList/CardSurahList.component';
import { Separator } from '../../Components/Separator/Separator.component';
import { Routes } from '../../Navigation/Routes';
import { Styles } from './QuranList.style';
import { Colors } from '../../Themes/Colors';
import { keyExtractor } from '../../Utils/Helper';

class QuranList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <View style={Styles.headerTitleText}>
          <Icon name="book" size={30} color={Colors.white} />
        </View>
      ),
      headerRight: (
        <View style={Styles.headerMenu}>
          <TouchableOpacity onPress={navigation.navigate('quranDetail')}>
            <Icon name="more-vert" size={30} color={Colors.white} />
          </TouchableOpacity>
        </View>
      ),
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };

  componentDidMount() {
    SplashScreen.hide();
    this.getDataQuran();
  }

  getDataQuran = async () => {
    const { getQuranList } = this.props;
    await getQuranList();
  };

  goToDetailpage = dataSurah => {
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
        onPress={() => this.goToDetailpage(item)}
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
