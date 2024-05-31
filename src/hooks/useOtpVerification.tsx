import useNavigationHook from './useNavigationHook';
import {Keyboard} from 'react-native';
import {useState} from 'react';
import useRouteHook from './useRouteHook';
import {CommonActions} from '@react-navigation/native';

const useOtpVerification = () => {
  const navigation = useNavigationHook();
  const {phone} = useRouteHook({screenName: 'OtpVerification'}).params;
  const [value, setValue] = useState<string>('');

  const onReSend = () => {};

  const onVerifyOTP = () => {
    Keyboard.dismiss();

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Register'}],
      }),
    );
  };

  return {
    phone,
    value,
    setValue,
    onReSend,
    onVerifyOTP,
  };
};

export default useOtpVerification;
