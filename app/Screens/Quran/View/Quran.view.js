import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import { Styles } from '../Style/Quran.style';
import { HeaderSearch } from '../../../Components/HeaderSearch/View/HeaderSearch.view';
import { QuranList } from '../../../Components/QuranList/View/QuranList.view';

const Quran = ({ getQuranList, data, isLoading, isError, navigation }) => {
  const [value, setValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [currentlyData, setCurrenlyData] = useState([]);

  useEffect(() => {
    fetchQuranList();
  }, []);

  useEffect(() => {
    if (!isError && !isLoading) {
      setFilteredData(data);
      setCurrenlyData(data);
    }
  }, [isError, isLoading]);

  const fetchQuranList = async () => {
    await getQuranList();
  };

  const onSearchSurah = (text) => {
    if (text) {
      const newData = currentlyData.filter((item) => {
        const surahName = item.name.transliteration.id;
        const itemData = surahName.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setValue(text);
      setFilteredData(newData);
    } else {
      setValue(text);
      setFilteredData(currentlyData);
    }
  };

  const onClearInput = () => {
    setValue('');
    setFilteredData(currentlyData);
  };

  const onPressMenu = (eventName, index) => {
    return null;
  };
  const onPressItem = (item) => () => {
    navigation.navigate('QuranDetail', {
      number: item.number,
      name: item.name.transliteration.id
    });
  };

  const keyExtractor = (_, index) => index.toString();

  const renderHeader = () => {
    return (
      <HeaderSearch
        title="Quran App"
        value={value}
        onClear={onClearInput}
        onPressMenu={onPressMenu}
        onChangeText={onSearchSurah}
      />
    );
  };

  const renderItem = ({ item }) => {
    return <QuranList data={item} onPress={onPressItem(item)} />;
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
