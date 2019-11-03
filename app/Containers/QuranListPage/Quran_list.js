import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import axios from 'axios';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Loading from '../../Components/LoadingComponent/Loading';
import { Styles } from './Quran_list.styles';
import { Colors } from '../../Utils/Colors';
import { quranList } from '../../Utils/EndPoints';

class QuranList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listQuran: [],
      refreshing: false,
      isLoading: false,
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
    this.setState({ isLoading: true });
    try {
      const res = await axios.get(quranList);
      const listQuran = res.data.data;
      this.setState({
        listQuran,
        isLoading: false,
      });
    } catch (error) {
      throw error;
    }
  };

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
    const { listQuran, refreshing, isLoading } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <View>
        <StatusBar
          backgroundColor={Colors.statusbar}
          barStyle="light-content"
        />
        <FlatList
          data={listQuran}
          keyExtractor={(list, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={this.renderCardContent}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this.onRefresh}
            />
          }
        />
      </View>
    );
  }
}

export default QuranList;
