import { StyleSheet } from 'react-native';

import { FontType } from '../../Themes/Fonts';
import { Colors } from '../../Themes/Colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    // flex: 1,
    marginTop: 10,
  },
  rowTitle: {
    fontSize: 14,
    marginLeft: 20,
    marginBottom: 10,
    // fontFamily: FontType.bold,
    fontWeight: '700',
    color: Colors.black,
  },
  settingListContainer: {
    marginHorizontal: 20,
    marginVertical: 15,
    // marginBottom: 5,
  },
  settingListTitle: {
    fontSize: 17,
    // fontFamily: FontType.semiBold,
  },
  settingListSubTitle: {
    paddingTop: 5,
    fontSize: 14,
    color: '#6e848f',
    // fontFamily: FontType.regular,
  },
});

export { Styles };
