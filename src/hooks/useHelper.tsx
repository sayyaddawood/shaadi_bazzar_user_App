import {Linking} from 'react-native';

const useHelper = () => {
  const goToWhatsapp = (phone: string, text: string) => {
    const number = phone.startsWith('0')
      ? `+92${phone.substring(1)}`
      : `${phone}`;
    const url = 'whatsapp://send?text=' + text + '&phone=' + number;
    Linking.openURL(url).catch(e => {
      alert('Whatsapp is not installed');
    });
  };

  return {
    goToWhatsapp,
  };
};

export default useHelper;
