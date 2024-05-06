import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {MainNavigator} from './src/navigation';
import {AppContainer} from './src/components';
import { Colors } from './src/theme';

declare global {
  const userData: any; // type will change later
}

const App = () => {
  return (
    <AppContainer safeAreaStyle={styles.bg}>
        <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
        <MainNavigator />
    </AppContainer>
  );
};

export default App;


const styles = StyleSheet.create({
  bg: {
    backgroundColor: Colors.PrimaryColor,
  },
});