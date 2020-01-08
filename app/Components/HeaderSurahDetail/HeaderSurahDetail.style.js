import { Colors } from '../../Themes/Colors';
import { FontType } from '../../Themes/Fonts';

const Styles = {
  headerContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingLeft: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.iron,
  },
  headerWhite: {
    backgroundColor: Colors.white,
  },
  logoContainer: {
    height: 28,
    width: 142,
    resizeMode: 'stretch',
  },
  title: {
    color: Colors.black,
    fontFamily: FontType.semiBold,
    fontSize: 20,
  },
  icSize: {
    width: 26,
    height: 26,
  },
  viewRowPoint: {
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textPoint: {
    paddingLeft: 8,
    fontFamily: FontType.regular,
  },
};

export { Styles };
