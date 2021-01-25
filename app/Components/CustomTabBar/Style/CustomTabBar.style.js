import { StyleSheet } from 'react-native';
import { Colors } from '../../../Themes/Colors';

const Styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-around'
  },
  tabBarContent: (isFocused) => ({
    margin: 15,
    padding: 10,
    borderRadius: 30,
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isFocused ? Colors.amethyst : 'rgba(0,0,0,0.02)'
  }),
  labelFocused: {
    paddingTop: 8,
    color: 'red',
    fontSize: 11
  },
  labelUnFocused: {
    paddingTop: 8,
    color: 'grey',
    fontSize: 11
  }
});

export { Styles };
