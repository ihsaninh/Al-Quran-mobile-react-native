import { StyleSheet } from 'react-native';

import { Colors } from '../../Themes/Colors';
import { FontType } from '../../Themes/Fonts';

const Styles = StyleSheet.create({
  CardStyle: {
    height: 'auto',
    margin: 10,
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
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 5,
    marginBottom: 10,
  },
  textNumber: {
    color: Colors.white,
    fontSize: 18,
    fontFamily: FontType.semiBold,
  },
  descTextRight: {
    textAlign: 'right',
    paddingTop: 10,
    paddingRight: 10,
    fontSize: 26,
    fontFamily: FontType.arabic,
  },
  descTextLeftContainer: {
    paddingVertical: 10,
    paddingRight: 10,
  },
  descTextLeft: {
    color: Colors.grey,
    fontSize: 14,
    lineHeight: 25,
    fontFamily: FontType.regular,
  },
});

export { Styles };
