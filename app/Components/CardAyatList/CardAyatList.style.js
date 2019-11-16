import { StyleSheet } from 'react-native';

import { Colors } from '../../Utils/Colors';

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
    fontWeight: '700',
  },
  descTextRight: {
    textAlign: 'right',
    paddingTop: 10,
    paddingRight: 10,
    fontSize: 25,
    fontFamily: 'arabic-font',
  },
  descTextLeftContainer: {
    paddingVertical: 10,
    paddingRight: 10,
  },
  descTextLeft: {
    color: Colors.grey,
    fontSize: 14,
    lineHeight: 25,
  },
});

export { Styles };
