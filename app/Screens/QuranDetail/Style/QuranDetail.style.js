import { StyleSheet } from 'react-native';

import { Colors } from '../../../Themes/Colors';
import { FontsFamily } from '../../../Themes/Fonts';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  surahInfoContainer: {
    alignItems: 'center',
    marginHorizontal: 16,
    paddingVertical: 16
  },
  surahNameText: {
    fontFamily: FontsFamily.medium,
    fontSize: 24,
    color: Colors.tundora
  },
  surahMeanText: {
    fontFamily: FontsFamily.regular,
    fontSize: 14,
    marginTop: -2,
    color: Colors.santasGray
  },
  surahRevVerText: {
    fontFamily: FontsFamily.regular,
    fontSize: 13,
    textTransform: 'uppercase',
    color: Colors.tundora
  },
  separator: {
    width: '40%',
    height: 1,
    marginVertical: 16,
    backgroundColor: '#ccc'
  },
  surahBasmallah: {
    paddingTop: 16,
    fontFamily: FontsFamily.lpmq,
    fontSize: 26
  },

  // section ayat
  ayatContainer: {
    marginHorizontal: 16,
    marginBottom: 32
  },
  ayatToolsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    borderRadius: 8
  },
  ayatNumber: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    borderRadius: 30,
    backgroundColor: '#38ada9'
  },
  ayatNumberText: {
    color: 'white'
  },
  ayatToolsIconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  paddingIcon: {
    paddingRight: 10
  },
  ayatDetailWrapper: {
    marginTop: 16
  },
  ayatArabic: {
    fontSize: 28,
    lineHeight: 55,
    fontFamily: 'LPMQ'
  },
  ayatTranslation: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    paddingTop: 12,
    lineHeight: 30,
    color: '#4c4c4c'
  }
});

export { Styles };
