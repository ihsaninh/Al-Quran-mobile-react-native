import { StyleSheet } from 'react-native';

import { FontType } from '../../Themes/Fonts';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    marginTop: 10,
  },
  rowTitle: {
    fontSize: 14,
    marginLeft: 20,
    marginBottom: 10,
    color: '#009688',
    fontFamily: FontType.bold,
  },
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
    color: '#6e848f',
    fontFamily: FontType.regular,
  },
});

export { Styles };
