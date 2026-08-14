import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/types';


type UseRouteHookType<T extends keyof RootStackParamList> = {
  screenName: T; // Restrict screenName to be a key of RootStackParamList
}

const useRouteHook = <T extends keyof RootStackParamList>({ screenName }: UseRouteHookType<T>) => {
  const route = useRoute<RouteProp<RootStackParamList, T>>();
  return route as RouteProp<RootStackParamList, T>;
};

export default useRouteHook;
