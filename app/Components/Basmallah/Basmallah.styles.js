import { StyleSheet } from 'react-native';
import { FontType } from '../../Themes/Fonts';

const Styles = StyleSheet.create({
  CardStyle: {
    height: 'auto',
  },
  descTextArabic: {
    textAlign: 'center',
    paddingVertical: 10,
    paddingRight: 10,
    fontSize: 30,
    fontFamily: FontType.arabic,
  },
});

export { Styles };
