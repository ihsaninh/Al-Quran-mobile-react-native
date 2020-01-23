import { StyleSheet } from 'react-native';

import { Colors } from '../../Themes/Colors';

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
    fontWeight: '700',
    color: Colors.black,
  },
  settingListContainer: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  settingListTitle: {
    fontSize: 17,
  },
  settingListSubTitle: {
    paddingTop: 5,
    fontSize: 14,
    color: '#6e848f',
  },
  settingSwitchContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  descView: {
    flex: 6,
  },
  switchView: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { Styles };
