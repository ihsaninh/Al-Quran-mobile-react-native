import { StyleSheet } from 'react-native';

import { Colors } from '../../Themes/Colors';
import { FontType } from '../../Themes/Fonts';

const Styles = StyleSheet.create({
  CardStyle: {
    height: 100,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  numberCircleContainer: {
    flex: 1.25,
    justifyContent: 'center',
  },
  descContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  goToDetailContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  NumberCircle: {
    height: 45,
    width: 45,
    borderColor: Colors.separator,
    borderWidth: 2,
    borderRadius: 100,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    marginLeft: 10,
    alignItems: 'center',
  },
  textNumber: {
    color: Colors.grey,
    fontSize: 18,
    fontFamily: FontType.semiBold,
  },
  descSurah: {
    flexDirection: 'row',
  },
  descTitle: {
    fontSize: 16,
    paddingTop: 10,
    fontFamily: FontType.semiBold,
  },
  bracketLeft: {
    paddingTop: 10,
    paddingLeft: 5,
    fontSize: 16,
    fontFamily: FontType.regular,
  },
  bracketRight: {
    paddingTop: 10,
    fontSize: 16,
    fontFamily: FontType.regular,
  },
  descArab: {
    fontSize: 19,
    paddingTop: 5,
    paddingLeft: 5,
    fontFamily: FontType.arabic,
  },
  descSubTitleTranslate: {
    fontSize: 13,
    paddingTop: 5,
    color: Colors.grey,
    fontFamily: FontType.regular,
  },
  descSubTitleAyat: {
    fontSize: 13,
    paddingTop: 8,
    color: Colors.grey,
    fontFamily: FontType.regular,
  },
  expandIconStyle: {
    paddingTop: 5,
    marginLeft: 15,
    color: Colors.grey,
  },
});

export { Styles };
