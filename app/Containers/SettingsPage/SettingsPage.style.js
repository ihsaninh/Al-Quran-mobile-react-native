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
  modalOptionsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginLeft: 20,
    marginRight: 25,
  },
  radioText: {
    fontSize: 16,
    fontFamily: FontType.regular,
    paddingTop: 8,
  },
  modalContentText: {
    fontSize: 16,
    fontFamily: FontType.regular,
    lineHeight: 25,
  },
});

export { Styles };
