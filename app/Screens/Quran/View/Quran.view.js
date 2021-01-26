import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';

import { Styles } from '../Style/Quran.style';
import { Header } from '../../../Components/Header/View/Header.view';
import { QuranList } from '../../../Components/QuranList/View/QuranList.view';

const Quran = ({ getQuranList, data, isLoading }) => {
  useEffect(() => {
    fetchQuranList();
  }, []);

  const fetchQuranList = async () => {
    await getQuranList();
  };

  const keyExtractor = (_, index) => index.toString();

  const renderHeader = () => {
    return <Header title="Quran App" onPressSearch={() => null} />;
  };

  const renderItem = ({ item }) => {
    return <QuranList data={item} onPress={() => null} />;
  };

  const renderSeparator = () => {
    return <View style={Styles.separator} />;
  };

  return (
    <View style={Styles.container}>
      {renderHeader()}
      <FlatList
        data={data}
        renderItem={renderItem}
        refreshing={isLoading}
        onRefresh={fetchQuranList}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default Quran;
