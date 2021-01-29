import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { StatusBar } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { I18n } from './app/I18n/i18n';
import { configureStore } from './app/Redux/Store';
import { Colors } from './app/Themes/Colors';
import { RootNavigator } from './app/Navigations/RootNavigator/RootNavigator';

const { store, persistor } = configureStore();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white
  }
};

const App = () => {
  return (
    <I18nextProvider i18n={I18n}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer theme={MyTheme}>
              <RootNavigator />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </I18nextProvider>
  );
};

export default App;
