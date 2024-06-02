import useNavigationHook from './useNavigationHook';
import {useFormik} from 'formik';
import {LoginFormType} from '../utils/schemaTypes';
import {loginSchema} from '../utils/validationsSchema';
import {Keyboard, TextInput} from 'react-native';
import {useEffect, useRef} from 'react';
import {useMutation} from '@tanstack/react-query';
import {phoneVerification} from '../network';

const useLogin = () => {
  const navigation = useNavigationHook();
  const ref = useRef<TextInput>();
  const {mutateAsync, isPending} = useMutation({
    mutationFn: phoneVerification,
    onSuccess: response => {
      const {
        result: {
          data: {phone},
        },
      } = response;
      navigation.navigate('OtpVerification', {phone: phone});
    },
    onError: error => {
      console.error('Error posting data:', error);
    },
  });
  const form = useFormik<LoginFormType>({
    initialValues: {
      phone: '',
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      Keyboard.dismiss();
      mutateAsync(values.phone);
    },
  });

  useEffect(() => {
    if (ref?.current) {
      ref?.current?.focus();
    }
  }, []);

  return {
    form,
    ref,
    isLoading: isPending,
  };
};

export default useLogin;
