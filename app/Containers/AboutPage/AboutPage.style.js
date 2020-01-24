import { StyleSheet } from 'react-native';

import { FontType } from '../../Themes/Fonts';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
  },
  appName: {
    fontSize: 22,
    fontFamily: FontType.semiBold,
  },
  appVersion: {
    fontFamily: FontType.regular,
    color: '#6e848f',
    fontSize: 14,
    paddingTop: 5,
  },
  appAuthor: {
    fontFamily: FontType.regular,
    color: '#6e848f',
    fontSize: 13,
    paddingTop: 5,
  },
  appImage: {
    marginBottom: 10,
    height: 70,
    width: 70,
  },
});

export { Styles };
