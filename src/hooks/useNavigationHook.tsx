import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/types';

const useNavigationHook = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return navigation;
};

export default useNavigationHook;
