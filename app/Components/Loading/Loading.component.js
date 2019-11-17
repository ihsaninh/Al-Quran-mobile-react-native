import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Styles } from './Loading.styles';
import { Colors } from '../../Themes/Colors';

const Loading = () => {
  return (
    <View style={Styles.loading}>
      <ActivityIndicator size={50} color={Colors.primary} />
    </View>
  );
};

export { Loading };
