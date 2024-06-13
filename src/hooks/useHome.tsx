import useNavigationHook from './useNavigationHook';
import {useFormik} from 'formik';
import {RegisterFormType} from '../utils/schemaTypes';
import {registerSchema} from '../utils/validationsSchema';
import {Keyboard, TextInput} from 'react-native';
import {useEffect, useMemo, useRef} from 'react';
import {CommonActions} from '@react-navigation/native';
import {useMutation, useQuery} from '@tanstack/react-query';
import {
  getCities,
  getHomeScreenData,
  profileSetup,
} from '../network/serverRequests';
import useUserInfo from './useUserInfo';
import AsyncStorage from '@react-native-community/async-storage';

const useHome = () => {
  const navigation = useNavigationHook();

  const {data, isPending} = useQuery({
    queryKey: ['home'],
    queryFn: getHomeScreenData,
  });

  return {
    isLoading: isPending,
    data: data?.result || [],
  };
};

export default useHome;
