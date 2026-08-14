import 'react-native-gesture-handler';

import React from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {MainNavigator} from './src/navigation';
import {AppContainer} from './src/components';
import {Colors} from './src/theme';
import {ReactQueryClientProvider} from './src/network';
import {UserDetails} from './src/models/UserDataType';
import Toast from 'react-native-toast-message';
import useFCMNotification from './src/hooks/useFCMNotification';
import { SafeAreaProvider } from 'react-native-safe-area-context';

declare global {
  var userInfo: UserDetails | undefined;
  var isLogin: boolean;
  var selectedLocId: string;
  var deviceName: string;
  var hasNotch: boolean;
  var notificationToken: any;
}

const App = () => {
  useFCMNotification();

  return (
    <ReactQueryClientProvider>
      <SafeAreaProvider>
        <View style={styles.bg}>
          <StatusBar
            backgroundColor={
              Platform.OS == 'android' ? Colors.PrimaryColor : 'transparent'
            }
            barStyle={'dark-content'}
          />
          <MainNavigator />
          <Toast />
        </View>
      </SafeAreaProvider>
    </ReactQueryClientProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: Colors.PrimaryColor,
    flex:1
  },
});
