import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import { Styles } from '../Style/Quran.style';
import { Header } from '../../../Components/Header/View/Header.view';
import { QuranList } from '../../../Components/QuranList/View/QuranList.view';

const Quran = ({ getQuranList, data, isLoading }) => {
  const [value, setValue] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [currentlyData] = useState(data);

  useEffect(() => {
    fetchQuranList();
  }, []);

  const fetchQuranList = async () => {
    await getQuranList();
  };

  const onSearchSurah = (text) => {
    if (text) {
      const newData = currentlyData.filter((item) => {
        const itemData = item.name.transliteration.id.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setValue(text);
    } else {
      setFilteredData(currentlyData);
      setValue(text);
    }
  };

  const onClearInput = () => {
    setFilteredData(currentlyData);
    setValue('');
  };

  const keyExtractor = (_, index) => index.toString();

  const renderHeader = () => {
    return (
      <Header
        value={value}
        title="Quran App"
        onClear={onClearInput}
        onChangeText={onSearchSurah}
      />
    );
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
        data={filteredData}
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
