import { Dimensions } from 'react-native';
import { Constants } from '../Utils/Constants';

const { BASE_WIDTH, BASE_HEIGHT } = Constants.BASE_DIMENSIONS;

const deviceWidth = Dimensions.get('window').width;

const deviceHeight = Dimensions.get('window').height;

const horizontalScale = size => (deviceWidth / BASE_WIDTH) * size;

const verticalScale = size => (deviceHeight / BASE_HEIGHT) * size;

const keyExtractor = (list, index) => index.toString();

export {
  keyExtractor,
  horizontalScale,
  verticalScale,
  deviceWidth,
  deviceHeight,
};
