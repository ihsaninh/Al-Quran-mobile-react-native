import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Styles } from './Loading.styles';

const Loading = () => {
  return (
    <View style={Styles.loading}>
      <ActivityIndicator animating={true} color={Colors.grey600} size={40} />
    </View>
  );
};

export { Loading };
