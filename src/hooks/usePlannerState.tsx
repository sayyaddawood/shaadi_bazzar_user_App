import {useMutation} from '@tanstack/react-query';
import {useState} from 'react';
import {onPlannerFindVendors} from '../network/serverRequests';
import useBudgetPlannerStore from '../store/useBudgetPlanner';
import useNavigationHook from './useNavigationHook';
import Toast from 'react-native-toast-message';

type Item = {
  label: string;
  value: string;
};

const usePlannerState = () => {
  const {navigation} = useNavigationHook();
  const setBudgetAmount = useBudgetPlannerStore(state => state.setBudgetAmount);
  const [date, setDate] = useState<string>('Select date');
  const [budget, setBudget] = useState(1000000);
  const [guest, setGuest] = useState('');
  const [cityItem, setCityItem] = useState<Item>({
    label: 'Select city',
    value: '',
  });
  const [areaItem, setAreaItem] = useState<Item[]>([
    {
      label: 'Select area',
      value: '',
    },
  ]);

  const {mutateAsync, isPending} = useMutation({
    mutationFn: onPlannerFindVendors,
    onSuccess: (response: any) => {
      if (response?.result?.categories?.length > 0) {
        setBudgetAmount(budget, guest);
        navigation.navigate('Budget', {
          date,
          guest,
          city: cityItem?.label,
          data: response?.result?.categories,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'No vendors are available',
          position: 'bottom',
        });
      }
    },
    onError: error => {
      console.error('Error posting data:', error);
    },
  });

  return {
    cityItem,
    areaItem,
    budget,
    date,
    guest,
    navigation,
    isPending,
    onPlannerFindVendors: mutateAsync,
    setGuest,
    setDate,
    setBudget,
    setCityItem,
    setAreaItem,
  };
};

export default usePlannerState;
