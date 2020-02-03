import { StyleSheet } from 'react-native';

import { FontType } from '../../Themes/Fonts';

const Styles = StyleSheet.create({
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
});

export { Styles };
