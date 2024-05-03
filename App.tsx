import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {MainNavigator} from './src/navigation';
import {AppContainer} from './src/components';

declare global {
  const userData: any; // type will change later
}

const App = () => {
  return (
    <AppContainer>
        <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
        <MainNavigator />
    </AppContainer>
  );
};

export default App;
