import { StyleSheet } from 'react-native';

import { Colors } from '../../../Themes/Colors';
import { FontsFamily } from '../../../Themes/Fonts';

const Styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerLeftContainer: {
    flexDirection: 'row'
  },
  rightIcon: {
    color: Colors.santasGray
  },
  leftIcon: {
    color: Colors.santasGray
  },
  headerTitle: {
    fontFamily: FontsFamily.bold,
    fontSize: 24,
    color: Colors.amethyst,
    paddingLeft: 8
  }
});

export { Styles };
