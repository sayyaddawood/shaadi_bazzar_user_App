import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  OtpVerification: undefined;
  Register: undefined;
  Onboarding: undefined;
  Home: undefined;
  HomeTabs: undefined;
  VenueDetail: undefined;
  VenueCategoriesList: undefined;
  SendMessage: undefined;
  AlbumListing: undefined;
  WriteReview: {
    title: string;
  };
  CheckAvailability: undefined
  ViewAllAlbums: undefined
  AlbumGallery: {
    activeIndexImage: number
  },
  UserSettings: undefined
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type ClearStack = {
  navigation: any;
  route: string;
};
