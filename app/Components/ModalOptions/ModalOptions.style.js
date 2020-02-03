import { StyleSheet } from 'react-native';

import { deviceWidth } from '../../Utils/Helper';
import { FontType } from '../../Themes/Fonts';

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
    color: '#009688',
    paddingTop: 20,
    textTransform: 'capitalize',
  },
  modalOptionsContainer: {
    height: 'auto',
    overflow: 'hidden',
    marginTop: 10,
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
    color: '#009688',
    fontSize: 15,
  },
});

export { Styles };
