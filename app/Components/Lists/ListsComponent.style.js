import { StyleSheet } from 'react-native';

import { FontType } from '../../Themes/Fonts';
import { Colors } from '../../Themes/Colors';

const Styles = StyleSheet.create({
  settingListContainer: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  settingListTitle: {
    fontSize: 16,
    fontFamily: FontType.regular,
  },
  settingListSubTitle: {
    paddingTop: 5,
    fontSize: 13.5,
    color: Colors.grey,
    fontFamily: FontType.regular,
  },
});

export { Styles };
