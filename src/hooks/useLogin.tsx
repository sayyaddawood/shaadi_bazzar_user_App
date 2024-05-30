import useNavigationHook from './useNavigationHook';
import {useFormik} from 'formik';
import {LoginFormType} from '../utils/schemaTypes';
import {loginSchema} from '../utils/validationsSchema';
import {Keyboard, TextInput} from 'react-native';
import {useEffect, useRef} from 'react';

const useLogin = () => {
  const navigation = useNavigationHook();
  const ref = useRef<TextInput>();
  const form = useFormik<LoginFormType>({
    initialValues: {
      phone: '',
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      Keyboard.dismiss();
      navigation.navigate('OtpVerification', {phone: values.phone});
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
  };
};

export default useLogin;
