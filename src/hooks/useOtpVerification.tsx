import useNavigationHook from './useNavigationHook';
import {Keyboard} from 'react-native';
import {useState} from 'react';
import useRouteHook from './useRouteHook';
import {CommonActions} from '@react-navigation/native';
import {codeVerification} from '../network/serverRequests';
import {useMutation} from '@tanstack/react-query';
import useUserInfo from './useUserInfo';

const useOtpVerification = () => {
  const navigation = useNavigationHook();
  const {phone} = useRouteHook({screenName: 'OtpVerification'}).params;
  const [value, setValue] = useState<string>('');
  const {saveData} = useUserInfo();

  const onReSend = () => {};

  const onVerifyOTP = () => {
    Keyboard.dismiss();
    mutateAsync({code: Number(value), phoneNumber: phone});
  };

  const {mutateAsync, isPending} = useMutation({
    mutationFn: codeVerification,
    onSuccess: response => {
      saveData(response?.result?.data);
      if (response?.result?.data?.is_account_verified) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'HomeTabs'}],
          }),
        );
      } else {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Register'}],
          }),
        );
      }
    },
    onError: error => {
      console.error('Error posting data:', error);
    },
  });

  return {
    isLoading: isPending,
    phone,
    value,
    setValue,
    onReSend,
    onVerifyOTP,
  };
};

export default useOtpVerification;
