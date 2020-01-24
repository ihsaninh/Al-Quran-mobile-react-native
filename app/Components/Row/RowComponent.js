import React from 'react';
import { View, Text } from 'react-native';

import { Styles } from './Row.Style';

const Row = props => {
  const { children, title } = props;
  return (
    <View style={Styles.rowContainer}>
      <Text style={Styles.rowTitle}>{title}</Text>
      <View>
        <View>{children}</View>
      </View>
    </View>
  );
};

export { Row };
