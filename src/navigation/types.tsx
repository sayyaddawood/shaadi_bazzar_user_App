import {NativeStackScreenProps} from '@react-navigation/native-stack';
import SCREENS from './screenNames';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type ClearStack = {
  navigation: any;
  route: string;
};
