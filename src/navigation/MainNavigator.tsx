import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login, OtpVerification, Splash, Register} from '../screens';
import {navigationRef} from './navigationService';
import {AppContainer} from '../components';

const Stack = createNativeStackNavigator();

import {DefaultTheme} from '@react-navigation/native';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#000',
  },
};

function MainNavigator() {
  let initialRouteName = 'Splash';

  return (
    <AppContainer>
      <NavigationContainer ref={navigationRef} theme={navTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={initialRouteName}>
          <Stack.Screen name="Splash" component={Splash} options={options} />
          <Stack.Screen name="Login" component={Login} options={options} />
          <Stack.Screen name="Register" component={Register} options={options} />
          <Stack.Screen
            name="OtpVerification"
            component={OtpVerification}
            options={options}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContainer>
  );
}

export default MainNavigator;

const options = () => ({
  headerShown: false,
});
