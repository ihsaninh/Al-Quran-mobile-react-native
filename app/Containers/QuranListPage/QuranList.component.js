import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Loading from '../../Components/LoadingComponent/Loading';
import { Styles } from './QuranList.style';
import { Colors } from '../../Utils/Colors';

class QuranList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

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
    const {
      navigation: { navigate },
    } = this.props;
    navigate('QuranDetail', {
      dataSurah,
    });
  };

  onRefresh = () => {
    this.setState({ refreshing: true }, () => this.getDataQuran());
    setTimeout(() => this.setState({ refreshing: false }), 1000);
  };

  renderCardContent = ({ item }) => {
    return (
      <TouchableOpacity onPress={this.goToDetailpage(item)} activeOpacity={0.6}>
        <CardView
          cardElevation={2}
          cardMaxElevation={2}
          cornerRadius={5}
          style={Styles.CardStyle}>
          <View style={Styles.cardContainer}>
            <View style={Styles.numberCircleContainer}>
              <View style={Styles.NumberCircle}>
                <Text style={Styles.textNumber}>{item.id}</Text>
              </View>
            </View>
            <View style={Styles.descContainer}>
              <Text style={Styles.descTitle}>
                {item.surat_name} ({item.surat_text})
              </Text>
              <Text style={Styles.descSubTitle}>
                Terjemahan: {item.surat_terjemahan}
              </Text>
              <Text style={Styles.descSubTitle}>
                Jumlah Ayat: {item.count_ayat}
              </Text>
            </View>
            <View style={Styles.goToDetailContainer}>
              <Icon
                name="keyboard-arrow-right"
                size={30}
                color="grey"
                style={Styles.expandIconStyle}
              />
            </View>
          </View>
        </CardView>
      </TouchableOpacity>
    );
  };

  render() {
    const { refreshing } = this.state;
    const { dataQuran, isLoading } = this.props;

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
          onRefresh={this.onRefresh}
        />
      </View>
    );
  }
}

export default QuranList;
