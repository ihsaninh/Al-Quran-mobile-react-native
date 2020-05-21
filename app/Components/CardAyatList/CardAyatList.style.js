import { StyleSheet } from 'react-native';

import { Colors } from '../../Themes/Colors';
import { FontType } from '../../Themes/Fonts';

const Styles = StyleSheet.create({
  CardStyle: {
    height: 'auto',
    padding: 10,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  numberCircleContainer: {
    flex: 0.75,
  },
  descContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  NumberCircle: {
    height: 45,
    width: 45,
    borderRadius: 100,
    borderColor: Colors.separator,
    borderWidth: 2,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 5,
    marginBottom: 10,
  },
  textNumber: {
    color: Colors.grey,
    fontSize: 18,
    fontFamily: FontType.semiBold,
  },
  descTextRight: {
    textAlign: 'right',
    paddingTop: 10,
    paddingRight: 10,
    fontSize: 27,
    fontFamily: FontType.arabic,
    lineHeight: 70,
  },
  descTextLeftContainer: {
    paddingVertical: 10,
    paddingRight: 10,
  },
  descTextLeft: {
    color: Colors.grey,
    fontSize: 14,
    lineHeight: 30,
    fontFamily: FontType.regular,
  },
});

export { Styles };
