import { StyleSheet } from 'react-native';

import { Colors } from '../../Themes/Colors';
import { FontType } from '../../Themes/Fonts';

const Styles = StyleSheet.create({
  headerTitle: {
    color: Colors.black,
    fontSize: 20,
    fontFamily: FontType.semiBold,
  },
  headerSubtitle: {
    color: Colors.black,
    fontFamily: FontType.regular,
  },
});

export { Styles };
