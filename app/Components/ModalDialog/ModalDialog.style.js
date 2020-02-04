import { StyleSheet } from 'react-native';

import { deviceWidth } from '../../Utils/Helper';
import { FontType } from '../../Themes/Fonts';
import { Colors } from '../../Themes/Colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    height: 180,
    width: deviceWidth * 0.9,
    backgroundColor: 'white',
    borderRadius: 3,
  },
  modalTitleContainer: {
    flex: 1,
  },
  modalTitleText: {
    fontSize: 17,
    paddingLeft: 20,
    fontFamily: FontType.bold,
    color: Colors.persianGreen,
    paddingTop: 20,
    textTransform: 'uppercase',
  },
  modalContentContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    overflow: 'hidden',
  },
  modalContentText: {
    fontSize: 16,
    fontFamily: FontType.regular,
    lineHeight: 25,
  },
  modalButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 20,
    paddingBottom: 10,
  },
  buttonText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontFamily: FontType.semiBold,
    textTransform: 'uppercase',
    color: Colors.persianGreen,
    fontSize: 15,
  },
});

export { Styles };
