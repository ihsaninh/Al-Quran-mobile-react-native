import { StyleSheet } from 'react-native';
import { Colors } from '../../Utils/Colors';

const Styles = StyleSheet.create({
  CardStyle: {
    height: 100,
    margin: 10,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  numberCircleContainer: {
    flex: 1.25,
  },
  descContainer: {
    flex: 3,
    flexDirection: 'column',
  },
  goToDetailContainer: {
    flex: 1,
  },
  NumberCircle: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 10,
  },
  textNumber: {
    color: Colors.white,
    fontSize: 18,
  },
  descTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  descSubTitle: {
    fontSize: 14,
    paddingTop: 3,
  },
  expandIconStyle: {
    paddingTop: 35,
  },
  headerTitleText: {
    marginLeft: 20,
  },
});

export { Styles };
