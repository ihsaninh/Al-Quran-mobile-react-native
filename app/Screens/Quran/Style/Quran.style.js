import { StyleSheet } from 'react-native';

import { Colors } from '../../../Themes/Colors';
import { FontsFamily } from '../../../Themes/Fonts';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 16
  },
  headerContainer: {
    height: 70,
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
    paddingLeft: 16
  },
  lastReadContainer: {
    height: 150,
    borderRadius: 10,
    backgroundColor: '#F9F9F9',
    padding: 16
    // borderColor: Colors.amethyst,
    // borderWidth: 1
  },
  textLastRead: {
    fontFamily: FontsFamily.light,
    fontSize: 17,
    paddingLeft: 8,
    paddingTop: 1,
    color: Colors.amethyst
  },
  lastReadTextContainer: {
    flexDirection: 'row'
  },
  textLastReadSurah: {
    fontFamily: FontsFamily.semiBold,
    paddingTop: 16,
    fontSize: 25,
    color: Colors.amethyst
  },
  textLastReadAyah: {
    fontFamily: FontsFamily.regular,
    fontSize: 15,
    paddingTop: 1,
    color: Colors.amethyst
  }
});

export { Styles };
