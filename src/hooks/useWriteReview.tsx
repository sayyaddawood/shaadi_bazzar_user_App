import {useMutation} from '@tanstack/react-query';
import {onSubmitReview} from '../network/serverRequests';
import {useState} from 'react';
import {Alert} from 'react-native';
import useNavigationHook from './useNavigationHook';

const useWriteReview = () => {
  const {navigation} = useNavigationHook();
  const [state, setState] = useState({rating: 3, feedback: ''});
  const {mutateAsync, isPending} = useMutation({
    mutationFn: onSubmitReview,
    onSuccess: response => {
      console.log(response);
      if (response.code == 200 && response.message == 'Success') {
        Alert.alert('Thank You', 'Your feedback has been sent', [
          {text: 'Go back', onPress: () => navigation.goBack()},
        ]);
      }
    },
    onError: error => {
      console.error('Error posting data:', error);
    },
  });

  const onPress = (vendorId: number) => {
    if (state.feedback === '') {
      alert('Feedback is required');
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
