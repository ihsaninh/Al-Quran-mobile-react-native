import { StyleSheet } from 'react-native';

import { Colors } from '../../../Themes/Colors';
import { FontsFamily } from '../../../Themes/Fonts';

const Styles = StyleSheet.create({
  listSurahContainer: {
    height: 90
  },
  listSurahContent: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16
  },
  versesNumberContainer: {
    flex: 1
  },
  versesNumberWrap: {
    width: 45,
    height: 45,
    backgroundColor: Colors.amethyst,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  surahNameContainer: {
    flex: 3
  },
  surahArabicContainer: {
    flex: 2
  },
  versesNumber: {
    fontFamily: FontsFamily.semiBold,
    color: Colors.white
  },
  surahName: {
    fontFamily: FontsFamily.semiBold,
    color: Colors.grisaille,
    fontSize: 18
  },
  surahInfo: {
    fontFamily: FontsFamily.medium,
    fontSize: 13,
    color: Colors.santasGray
  },
  surahArabic: {
    fontFamily: FontsFamily.lpmq,
    color: Colors.amethyst,
    fontSize: 22
  }
});

export { Styles };
