import { StyleSheet } from 'react-native';

import { FontType } from '../../Themes/Fonts';

const Styles = StyleSheet.create({
  rowContainer: {
    marginTop: 10,
  },
  rowTitle: {
    fontSize: 14,
    marginLeft: 20,
    marginBottom: 10,
    color: '#009688',
    fontFamily: FontType.bold,
  },
});

export { Styles };
