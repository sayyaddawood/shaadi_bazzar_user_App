import AsyncStorage from '@react-native-community/async-storage';
import useNavigationHook from './useNavigationHook';
import {CommonActions} from '@react-navigation/native';
import {Alert} from 'react-native';
import {UserDetails, UserDetailsResult} from '../models/UserDataType';
import {useQueryClient} from '@tanstack/react-query';

const useUserInfo = () => {
  const {navigation} = useNavigationHook();
  const queryClient = useQueryClient();

  const onSaveGuestToken = async (token: string) => {
    await AsyncStorage.setItem('@gToken', token);
  };

  const saveData = async (data: UserDetailsResult) => {
    await AsyncStorage.setItem('@userInfo', JSON.stringify(data));
    if (data?.userDetail) {
      global.userInfo = data.userDetail[0];
    }
  };

  const getUserData = async () => {
    const data = await AsyncStorage.getItem('@userInfo');
    const user = data ? (JSON.parse(data) as UserDetailsResult) : undefined;
    if (user?.userDetail) {
      global.userInfo = user?.userDetail[0] as UserDetails;
    }
    return user;
  };

  const onConfirmLogout = async () => {
    await AsyncStorage.removeItem('@userInfo');
    await AsyncStorage.removeItem('@token');
    global.userInfo = undefined;
    queryClient.clear();
    queryClient.invalidateQueries();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Onboarding'}],
      }),
    );
  };

  const onLogout = async () => {
    Alert.alert('Alert', 'Are you sure you want to sign out?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      {
        text: 'Yes',
        onPress: async () => onConfirmLogout(),
      },
    ]);
  };

  const setAccessToken = async (token: string) => {
    await AsyncStorage.setItem('@token', token);
  };

  const getAuthToken = async () => {
    const data = await AsyncStorage.getItem('@token');
    return data ?? undefined;
  };

  const getFCMToken = async () => {
    const token = await AsyncStorage.getItem('@fcmToken');
    return token ?? undefined;
  };

  return {
    saveData,
    getUserData,
    onLogout,
    getAuthToken,
    setAccessToken,
    getFCMToken,
    onConfirmLogout,
    onSaveGuestToken
  };
};

export default useUserInfo;
