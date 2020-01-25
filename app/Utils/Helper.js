import { Dimensions } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import ExtraDimensions from 'react-native-extra-dimensions-android';

import { Constants } from '../Utils/Constants';

const { BASE_WIDTH, BASE_HEIGHT } = Constants.BASE_DIMENSIONS;

const deviceWidth = Dimensions.get('window').width;

const deviceHeight = ExtraDimensions.get('REAL_WINDOW_HEIGHT');

const horizontalScale = size => (deviceWidth / BASE_WIDTH) * size;

const verticalScale = size => (deviceHeight / BASE_HEIGHT) * size;

const keyExtractor = (list, index) => index.toString();

const isNetworkConnected = () => {
  return new Promise((resolve, reject) => {
    NetInfo.fetch().then(state => {
      const isConnected = state.isConnected;
      if (isConnected) {
        resolve(isConnected);
      }
      reject(isConnected);
    });
  });
};

export {
  keyExtractor,
  horizontalScale,
  verticalScale,
  deviceWidth,
  deviceHeight,
  isNetworkConnected,
};
