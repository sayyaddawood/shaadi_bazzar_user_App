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
import AsyncStorage from '@react-native-community/async-storage';

const useRegister = () => {
  const navigation = useNavigationHook();
  const ref = useRef<TextInput>();
  const {saveData, setAccessToken, getUserData, onLogout} = useUserInfo();

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
    onSubmit: async values => {
      Keyboard.dismiss();
      const user = await getUserData();

      mutateAsync({
        phone: user?.data?.phone || '',
        businessName: 'string',
        name: values.name,
        parentId: 0,
        categoryIds: [0],
        userType: 'customer',
        businessphone: 'string',
        locationId: Number(values.city),
        address: 'string',
      });
    },
  });

  useEffect(() => {
    if (ref?.current) {
      ref?.current?.focus();
    }
  }, []);

  const {mutateAsync} = useMutation({
    mutationFn: profileSetup,
    onSuccess: response => {

      console.log("@data ", JSON.stringify(response))

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
    onLogout,
  };
};

export default useRegister;
