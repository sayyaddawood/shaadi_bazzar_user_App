import 'react-native-gesture-handler';

import React from 'react';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import {MainNavigator} from './src/navigation';
import {AppContainer} from './src/components';
import {Colors} from './src/theme';
import {ReactQueryClientProvider} from './src/network';
import { UserDetails } from './src/models/UserDataType';

declare global {
  var userInfo: UserDetails;
  var isLogin: boolean;
  var deviceName: string;
  var hasNotch: boolean;
  var notificationToken: any;
}

const App = () => {
  return (
    <ReactQueryClientProvider>
      <AppContainer safeAreaStyle={styles.bg}>
        <StatusBar
          backgroundColor={
            Platform.OS == 'android' ? Colors.PrimaryColor : 'transparent'
          }
          barStyle={'dark-content'}
        />
        <MainNavigator />
      </AppContainer>
    </ReactQueryClientProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: Colors.PrimaryColor,
  },
});
