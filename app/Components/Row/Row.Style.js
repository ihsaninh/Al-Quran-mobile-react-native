import { StyleSheet } from 'react-native';

import { FontType } from '../../Themes/Fonts';
import { Colors } from '../../Themes/Colors';

const Styles = StyleSheet.create({
  rowContainer: {
    marginTop: 10,
  },
  rowTitle: {
    fontSize: 14,
    marginLeft: 20,
    marginBottom: 10,
    color: Colors.persianGreen,
    fontFamily: FontType.bold,
  },
});

export { Styles };
