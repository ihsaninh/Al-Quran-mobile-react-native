import React from 'react';
import { View, Text } from 'react-native';

import { Styles } from '../Style/QuranDetail.style';

const QuranDetail = ({ navigation, route }) => {
  return (
    <View style={Styles.container}>
      <Text>{route.params.number}</Text>
    </View>
  );
};
export default QuranDetail;
