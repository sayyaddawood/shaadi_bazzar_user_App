import useNavigationHook from './useNavigationHook';
import {useFormik} from 'formik';
import {RegisterFormType} from '../utils/schemaTypes';
import {loginSchema, registerSchema} from '../utils/validationsSchema';
import {Keyboard, TextInput} from 'react-native';
import {useEffect, useRef} from 'react';
import {CommonActions} from '@react-navigation/native';

const useRegister = () => {
  const navigation = useNavigationHook();
  const ref = useRef<TextInput>();
  const form = useFormik<RegisterFormType>({
    initialValues: {
      name: '',
      city: '',
    },
    validationSchema: registerSchema,
    onSubmit: values => {
      Keyboard.dismiss();
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'HomeTabs'}],
        }),
      );
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

export default useRegister;
