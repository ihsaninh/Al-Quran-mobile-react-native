import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';

import { Colors } from './app/Utils/Colors';
import AppNavigator from './app/Navigation/AppNavigator';

const App = () => {
  return (
    <Fragment>
      <StatusBar backgroundColor={Colors.statusbar} barStyle="light-content" />
      <AppNavigator />
    </Fragment>
  );
};

export default App;
