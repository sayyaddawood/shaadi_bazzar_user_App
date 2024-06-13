import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { Vendor } from '../models/RequestTypes';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  OtpVerification: {
    phone: string;
  };
  Register: undefined;
  Onboarding: undefined;
  Home: undefined;
  HomeTabs: undefined;
  VenueDetail: {
    id: string;
  };
  VenueCategoriesList: {
    list: Vendor[]
    title: string
  };
  SendMessage: undefined;
  AlbumListing: {
    list: VendorAlbumMedia[];
  };
  WriteReview: {
    title: string;
  };
  CheckAvailability: undefined;
  ViewAllAlbums: undefined;
  AlbumGallery: {
    activeIndexImage: number;
    itemsImages: VendorAlbumMedia[];
  };
  UserSettings: undefined;
  Search: {
    id: string
  };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type ClearStack = {
  navigation: any;
  route: string;
};
