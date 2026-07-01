import useNavigationHook from './useNavigationHook';
import {Keyboard} from 'react-native';
import {useState} from 'react';
import useRouteHook from './useRouteHook';
import {CommonActions} from '@react-navigation/native';
import {codeVerification, resendCode} from '../network/serverRequests';
import {useMutation} from '@tanstack/react-query';
import useUserInfo from './useUserInfo';
import Toast from 'react-native-toast-message';

const useOtpVerification = () => {
  const {navigation} = useNavigationHook();
  const {phone} = useRouteHook({screenName: 'OtpVerification'}).params;
  const [value, setValue] = useState<string>('');
  const {saveData, setAccessToken} = useUserInfo();

  const onVerifyOTP = () => {
    Keyboard.dismiss();
    mutateAsync({code: Number(value), phoneNumber: phone});
  };

  const {mutateAsync, isPending} = useMutation({
    mutationFn: codeVerification,
    onSuccess: response => {
      saveData(response.result);
      setAccessToken(response?.result?.access_token);
      const isUserAlreadyVerified = response?.result?.data?.is_account_verified;
      if (isUserAlreadyVerified) {
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
      if (error?.message) {
        Toast.show({
          type: 'error',
          text1: error?.message,
          position: 'bottom',
        });
      }
    },
  });

  const {mutateAsync: mutateResendAsync, isPending: isResendLoading} =
    useMutation({
      mutationFn: resendCode,
      onSuccess: response => {
        if (response?.result?.message) {
          Toast.show({
            type: 'success',
            text1: response?.result?.message,
            position: 'bottom',
          });
        }
      },
      onError: error => {
        if (error?.message) {
          Toast.show({
            type: 'error',
            text1: error?.message,
            position: 'bottom',
          });
        }
      },
    });

  const onReSend = () => mutateResendAsync(phone);

  return {
    isLoading: isPending,
    phone,
    value,
    isResendLoading,
    setValue,
    onReSend,
    onVerifyOTP,
  };
};

export default useOtpVerification;
