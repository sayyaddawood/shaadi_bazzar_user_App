import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Login,
  OtpVerification,
  Splash,
  Register,
  Onboarding,
  VenueDetail,
  SendMessage,
  VenueCategoriesList,
  AlbumListing,
  WriteReview,
  CheckAvailability,
  ViewAllAlbums,
  AlbumGallery,
  UserSettings,
  Search,
} from '../screens';
import {navigationRef} from './navigationService';
import {AppContainer} from '../components';

const Stack = createNativeStackNavigator();

import {DefaultTheme} from '@react-navigation/native';
import BottomTabs from './BottomTabs';

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
          <Stack.Screen
            name="VenueDetail"
            component={VenueDetail}
            options={options}
          />
          <Stack.Screen
            name="HomeTabs"
            component={BottomTabs}
            options={options}
          />
          <Stack.Screen name="Splash" component={Splash} options={options} />
          <Stack.Screen name="Login" component={Login} options={options} />
          <Stack.Screen
            name="VenueCategoriesList"
            component={VenueCategoriesList}
            options={options}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={options}
          />
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={options}
          />
          <Stack.Screen
            name="OtpVerification"
            component={OtpVerification}
            options={options}
          />
          <Stack.Screen
            name="SendMessage"
            component={SendMessage}
            options={options}
          />
          <Stack.Screen
            name="AlbumListing"
            component={AlbumListing}
            options={options}
          />
          <Stack.Screen
            name="WriteReview"
            component={WriteReview}
            options={options}
          />
          <Stack.Screen
            name="CheckAvailability"
            component={CheckAvailability}
            options={options}
          />
          <Stack.Screen
            name="ViewAllAlbums"
            component={ViewAllAlbums}
            options={options}
          />
          <Stack.Screen
            name="AlbumGallery"
            component={AlbumGallery}
            options={options}
          />

          <Stack.Screen
            name="UserSettings"
            component={UserSettings}
            options={options}
          />
        
          <Stack.Screen
            name="Search"
            component={Search}
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
