import useNavigationHook from './useNavigationHook';
import {useFormik} from 'formik';
import {RegisterFormType} from '../utils/schemaTypes';
import {registerSchema} from '../utils/validationsSchema';
import {Keyboard, TextInput} from 'react-native';
import {useEffect, useMemo, useRef} from 'react';
import {CommonActions} from '@react-navigation/native';
import {useMutation, useQuery} from '@tanstack/react-query';
import {getCities, profileSetup} from '../network/serverRequests';
import useUserInfo from './useUserInfo';

const useRegister = () => {
  const navigation = useNavigationHook();
  const ref = useRef<TextInput>();
  const {saveData, onLogout} = useUserInfo();

  const {data: cities} = useQuery({
    queryKey: ['cities'],
    queryFn: getCities,
  });

  const form = useFormik<RegisterFormType>({
    initialValues: {
      name: '',
      city: '',
    },
    validationSchema: registerSchema,
    onSubmit: values => {
      Keyboard.dismiss();
      mutate({
        name: values.name,
        phone: global.userInfo.phone,
        locationId: values.city,
      });
    },
  });

  useEffect(() => {
    if (ref?.current) {
      ref?.current?.focus();
    }
  }, []);

  const {mutate} = useMutation({
    mutationFn: profileSetup,
    onSuccess: response => {
      saveData(response?.result?.data);
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

  const formatCities = useMemo(() => {
    if (cities?.result) {
      return cities?.result?.map((item: any) => {
        return {label: item.name, value: item.id};
      });
    }
  }, [cities?.result]);

  return {
    form,
    ref,
    cities: formatCities || [],
    onLogout
  };
};

export default useRegister;