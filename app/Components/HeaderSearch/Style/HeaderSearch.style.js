import { StyleSheet, Dimensions } from 'react-native';

import { Colors } from '../../../Themes/Colors';
import { FontsFamily } from '../../../Themes/Fonts';

const width = Dimensions.get('window').width;

const Styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    paddingHorizontal: 16
  },
  rightIcon: {
    color: Colors.santasGray
  },
  leftIcon: {
    color: Colors.santasGray,
    padding: 5
  },
  headerTitle: {
    fontFamily: FontsFamily.bold,
    fontSize: 24,
    color: Colors.amethyst,
    paddingLeft: 8
  },
  inputBox: (translateX) => ({
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    width: width - 16,
    transform: [{ translateX: translateX }]
  }),
  backIcon: {
    height: 30,
    width: 30,
    marginHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: Colors.athensGray,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingBottom: 8,
    fontSize: 14,
    color: Colors.tundora,
    fontFamily: FontsFamily.medium
  },
  borderButton: {
    borderRadius: 10,
    marginRight: 8
  },
  headerMenu: {
    flexDirection: 'row'
  },
  moreButton: {
    borderRadius: 10,
    marginRight: -10
  }
});

export { Styles };
