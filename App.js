import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { StatusBar } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import { Provider as PaperProvider } from 'react-native-paper';

import { Colors } from './app/Themes/Colors';
import AppNavigator from './app/Navigation/AppNavigator';
import { store } from './app/Redux/CreateStore';
import I18next from './app/I18next/I18n';

const App = () => {
  return (
    <I18nextProvider i18n={I18next}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <ReduxProvider store={store}>
        <PaperProvider>
          <AppNavigator />
        </PaperProvider>
      </ReduxProvider>
    </I18nextProvider>
  );
};

export default App;
