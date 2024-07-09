import {useMutation} from '@tanstack/react-query';
import {onSubmitLeads} from '../network/serverRequests';
import Toast from 'react-native-toast-message';

const useLeads = () => {
  const {mutateAsync, isPending} = useMutation({
    mutationFn: onSubmitLeads,
    onSuccess: response => {
      if (response.code == 200) {
        Toast.show({
          type: 'success',
          text1: 'Leads successfully saved.',
          position: 'bottom',
        });
      }
    },
    onError: error => {
      console.error('Error posting data:', error);
    },
  });

  return {
    isLoading: isPending,
    onSendLeads: mutateAsync,
  };
};

export default useLeads;
