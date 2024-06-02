import {UserData} from '../models/RequestTypes';
import AsyncStorage from '@react-native-community/async-storage';
import useNavigationHook from './useNavigationHook';
import {CommonActions} from '@react-navigation/native';
import {Alert} from 'react-native';

const useUserInfo = () => {
  const navigation = useNavigationHook();
  const saveData = async (data: UserData) => {
    await AsyncStorage.setItem('@userInfo', JSON.stringify(data));
    global.userInfo = data;
  };

  const getUserData = async () => {
    const data = await AsyncStorage.getItem('@userInfo');
    const user = data ? JSON.parse(data) : undefined;
    global.userInfo = user;
    return user;
  };

  const onLogout = async () => {
    Alert.alert('Alert', 'Are you sure you want to sign out?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      {
        text: 'Yes',
        onPress: async () => {
          await AsyncStorage.removeItem('@userInfo');
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Onboarding'}],
            }),
          );
        },
      },
    ]);
  };

  return {saveData, getUserData, onLogout};
};

export default useUserInfo;
