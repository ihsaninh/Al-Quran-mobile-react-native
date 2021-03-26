import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import { Styles } from '../Style/QuranDetail.style';

const QuranDetail = ({
  navigation,
  route,
  data,
  isLoading,
  isError,
  errorMessage,
  getQuranDetail
}) => {
  useEffect(() => {
    fetchQuranDetail();
  }, []);

  const fetchQuranDetail = async () => {
    const { number } = route.params;
    await getQuranDetail(number);
  };

  const renderSurahInfo = () => {
    return (
      <View style={Styles.surahInfoContainer}>
        <Text style={Styles.surahNameText}>
          {data?.name?.transliteration?.id}
        </Text>
        <Text style={Styles.surahMeanText}>{data?.name?.translation?.id}</Text>
        <View style={Styles.separator} />
        <Text style={Styles.surahRevVerText}>
          {data?.revelation?.id} • {data?.numberOfVerses} AYAT
        </Text>
        {data?.preBismillah && <Text style={Styles.surahBasmallah}>﷽</Text>}
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View style={Styles.ayatContainer}>
        <View style={Styles.ayatToolsContainer}>
          <View style={Styles.ayatNumber}>
            <Text style={Styles.ayatNumberText}>{item.number.inSurah}</Text>
          </View>
          <View style={Styles.ayatToolsIconWrapper}>
            <Icon
              name="share-2"
              size={20}
              color="#38ada9"
              style={Styles.paddingIcon}
            />
            <Icon
              name="play"
              size={20}
              color="#38ada9"
              style={Styles.paddingIcon}
            />
            <Icon name="bookmark" size={20} color="#38ada9" />
          </View>
        </View>
        <View style={Styles.ayatDetailWrapper}>
          <Text style={Styles.ayatArabic}>{item.text.arab}</Text>
          <Text style={Styles.ayatTranslation}>{item.translation.id}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (_, index) => index.toString();

  return (
    <View style={Styles.container}>
      <FlatList
        data={data.verses}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={renderSurahInfo}
      />
    </View>
  );
};
export default QuranDetail;
