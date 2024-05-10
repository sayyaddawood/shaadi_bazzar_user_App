import AsyncStorage from '@react-native-community/async-storage';
import {Platform} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';

export const clearStack = ({navigation}: any) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{name: 'Home'}],
    }),
  );
};

export let saveUser = async (user: any, shouldUpdate = true) => {
  AsyncStorage.setItem('@app_user', JSON.stringify(user));
};

export let getUser = async () => {
  let user = undefined;
  let app_user: any = await AsyncStorage.getItem('@app_user');
  user = JSON.parse(app_user);
  return user;
};

export let signOut = async ({navigation}: any) => {
  navigation.reset({
    index: 0,
    routes: [{name: 'Login'}],
  });
  await AsyncStorage.removeItem('@app_user');
};

export let shouldNavigateToOnboarding = async () => {
  let app_state: any = false;
  app_state = await AsyncStorage.getItem('@open_state');
  return app_state;
};

export let setOnboardingOpened = async () => {
  AsyncStorage.setItem('@open_state', 'true');
};

export const init = async ({navigation}: any) => {
  const hasNotch = await DeviceInfo.hasNotch();
  global.hasNotch = hasNotch;
};
