import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/types';
import {Alert} from 'react-native';

const useNavigationHook = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const goBack = () => navigation.goBack();
  const goBackWithAlert = () => {
    Alert.alert('Alert', 'Are you sure want to go back?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      {text: 'Yes', onPress: () => navigation.goBack()},
    ]);
  };

  return {
    navigation,
    goBackWithAlert,
    goBack,
  };
};

export default useNavigationHook;
