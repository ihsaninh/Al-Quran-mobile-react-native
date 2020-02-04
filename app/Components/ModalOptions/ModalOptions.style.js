import { StyleSheet } from 'react-native';

import { deviceWidth } from '../../Utils/Helper';
import { FontType } from '../../Themes/Fonts';
import { Colors } from '../../Themes/Colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    width: deviceWidth * 0.9,
    backgroundColor: 'white',
    borderRadius: 3,
  },
  modalTitleContainer: {
    height: 40,
  },
  modalTitleText: {
    fontSize: 18,
    paddingLeft: 20,
    fontFamily: FontType.bold,
    color: Colors.persianGreen,
    paddingTop: 20,
    textTransform: 'capitalize',
  },
  modalOptionsContainer: {
    height: 'auto',
    overflow: 'hidden',
    marginTop: 10,
  },
  modalButtonContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 10,
    paddingBottom: 10,
  },
  buttonText: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontFamily: FontType.semiBold,
    textTransform: 'uppercase',
    color: Colors.persianGreen,
    fontSize: 15,
  },
});

export { Styles };
