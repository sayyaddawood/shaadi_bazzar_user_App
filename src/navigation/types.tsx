import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  OtpVerification: undefined;
  Register: undefined;
  Onboarding: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type ClearStack = {
  navigation: any;
  route: string;
};
