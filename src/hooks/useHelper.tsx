import {Linking} from 'react-native';
import Toast from 'react-native-toast-message';

const useHelper = () => {
  const goToWhatsapp = (phone: string, text: string) => {
    const number = phone.startsWith('0')
      ? `+92${phone.substring(1)}`
      : `${phone}`;
    const url = 'whatsapp://send?text=' + text + '&phone=' + number;
    Linking.openURL(url).catch(e => {
      Toast.show({
        type: 'success',
        text1: 'Whatsapp is not installed',
        position: 'bottom',
      });
    });
  };

  return {
    goToWhatsapp,
  };
};

export default useHelper;
