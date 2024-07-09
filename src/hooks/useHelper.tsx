import {useMemo} from 'react';
import {Linking, Platform, Share} from 'react-native';
import Toast from 'react-native-toast-message';

const useHelper = () => {
  const goToWhatsapp = (phone: string, text: string) => {
    if (phone.startsWith('0')) {
      phone = `+92${phone.substring(1)}`;
    } else if (phone.startsWith('92')) {
      phone = `+${phone}`; // Remove '+' sign
    }
    const url = 'whatsapp://send?text=' + text + '&phone=' + phone;
    Linking.openURL(url).catch(e => {});
  };

  const makeACall = (phoneNumber: string) => {
    if (phoneNumber.startsWith('0')) {
      phoneNumber = `+92${phoneNumber.substring(1)}`;
    } else if (phoneNumber.startsWith('92')) {
      phoneNumber = `+${phoneNumber}`; // Remove '+' sign
    }
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const rateApp = () => {
    const androidPackageName = 'com.shadibazaar'; // Replace with your app's package name
    const appleAppID = '1234567890'; // Replace with your app's Apple App Store ID

    if (Platform.OS === 'ios') {
      Linking.openURL(`itms-apps://itunes.apple.com/app/id${appleAppID}?mt=8`);
    } else if (Platform.OS === 'android') {
      Linking.openURL(`market://details?id=${androidPackageName}`);
    }
  };

  const shareApp = async () => {
    try {
      const result = await Share.share({
        message:
          'Check out this awesome app! https://play.google.com/store/apps/details?id=com.yourapp',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type:', result.activityType);
        } else {
          console.log('Shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const generateRandomColor = useMemo(() => {
    const letters = '89ABCDEF'; // Restrict to lighter shades
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 8)];
    }
    return color;
  }, []);

  return {
    goToWhatsapp,
    makeACall,
    rateApp,
    shareApp,
    generateRandomColor,
  };
};

export default useHelper;
