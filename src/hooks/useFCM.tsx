import {useMutation} from '@tanstack/react-query';
import {useEffect} from 'react';
import {onSubmitFCMToken} from '../network/serverRequests';
import useUserInfo from './useUserInfo';

const useFCM = () => {
  const {getFCMToken} = useUserInfo();
  const {mutateAsync} = useMutation({
    mutationFn: onSubmitFCMToken,
    onSuccess: response => {
      console.log('@FCM token: updated: ', JSON.stringify(response));
    },
    onError: error => {
      console.error('Error posting data:', error);
    },
  });

  useEffect(() => {
    getFCMToken().then(async token => {
      if (token) {
        await mutateAsync({
          newNotificationToken: token,
          phone: global.userInfo.phone,
          userType: 'customer',
        });
      }
    });
  }, []);
};

export default useFCM;
