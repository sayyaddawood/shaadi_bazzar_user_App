import useNavigationHook from './useNavigationHook';
import {useFormik} from 'formik';
import {RegisterFormType} from '../utils/schemaTypes';
import {registerSchema} from '../utils/validationsSchema';
import {Keyboard, TextInput} from 'react-native';
import {useEffect, useRef} from 'react';
import {CommonActions} from '@react-navigation/native';
import {useMutation} from '@tanstack/react-query';
import {profileSetup} from '../network/serverRequests';
import useUserInfo from './useUserInfo';
import useCities from './useCities';

const useRegister = () => {
  const {navigation} = useNavigationHook();
  const ref = useRef<TextInput>();
  const {cities} = useCities();
  const {saveData, setAccessToken, getUserData, onLogout} = useUserInfo();

  const form = useFormik<RegisterFormType>({
    initialValues: {
      name: '',
      city: '',
    },
    validationSchema: registerSchema,
    onSubmit: async values => {
      Keyboard.dismiss();
      const user = await getUserData();

      await mutateAsync({
        phone: user?.data?.phone || '',
        name: values.name,
        userType: 'customer',
        locationId: Number(values.city),
      });
    },
  });

  useEffect(() => {
    if (ref?.current) {
      ref?.current?.focus();
    }
  }, []);

  const {mutateAsync, isPending} = useMutation({
    mutationFn: profileSetup,
    onSuccess: response => {
      setAccessToken(response?.result?.access_token);
      saveData(response?.result);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'HomeTabs'}],
        }),
      );
    },
    onError: error => {
      console.error('Error posting data:', error);
    },
  });

  return {
    form,
    ref,
    cities: cities || [],
    onLogout,
    isLoading: isPending,
  };
};

export default useRegister;
