import {useMutation} from '@tanstack/react-query';
import {onSubmitReview} from '../network/serverRequests';
import {useState} from 'react';
import {Alert} from 'react-native';
import useNavigationHook from './useNavigationHook';
import Toast from 'react-native-toast-message';

const useWriteReview = () => {
  const {navigation, goBack} = useNavigationHook();
  const [state, setState] = useState({rating: 3, feedback: ''});
  const {mutateAsync, isPending} = useMutation({
    mutationFn: onSubmitReview,
    onSuccess: response => {
      console.log(response);
      if (response.code == 200 && response.message == 'Success') {
        goBack();
        Toast.show({
          type: 'success',
          text1: 'Thank You',
          text2: 'Your feedback has been sent',
          position: 'bottom',
        });
      }
    },
    onError: error => {
      console.error('Error posting data:', error);
    },
  });

  const onPress = (vendorId: number) => {
    if (state.feedback === '') {
      Toast.show({
        type: 'error',
        text1: 'Feedback is required',
        position: 'bottom',
      });
      return;
    }

    const body = {
      ...state,
      userId: global.userInfo.id,
      vendorId,
    };

    mutateAsync(body);
  };

  return {
    state,
    setState,
    onPress,
    isLoading: isPending,
  };
};

export default useWriteReview;
