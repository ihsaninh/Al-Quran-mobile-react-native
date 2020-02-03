import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { Colors } from './app/Themes/Colors';
import AppNavigator from './app/Navigation/AppNavigator';
import { store } from './app/Redux/CreateStore';

const App = () => {
  return (
    <Fragment>
      <StatusBar
        backgroundColor={Colors.white}
        barStyle="dark-content"
        animated
      />
      <Provider store={store}>
        <PaperProvider>
          <AppNavigator />
        </PaperProvider>
      </Provider>
    </Fragment>
  );
};

export default App;
