import {
  ApiResponse,
  ApiResponseBase,
  CityList,
  HomeScreenList,
  LoginResponseData,
  ResendCodeResult,
  Result,
  Results,
} from '../models/RequestTypes';
import {UserDetailsResult} from '../models/UserDataType';
import {requestApi} from './apiClient';
import {EndPointConstants, getEndpointUrl} from './const';

export const phoneVerification = async (number: string) => {
  const body = {
    phone: number,
    userType: 'customer',
  };
  const result = await requestApi({
    uri: getEndpointUrl(EndPointConstants.login),
    method: 'POST',
    body: body,
  });

  return result as ApiResponse<Result<LoginResponseData>>;
};

type codeType = {
  phoneNumber: string;
  code: number;
  userType?: string;
};

export const codeVerification = async (body: codeType) => {
  body['userType'] = 'customer';
  const result = await requestApi({
    uri: getEndpointUrl(EndPointConstants.OtpVerification),
    method: 'POST',
    body: body,
  });

  return result as ApiResponse<UserDetailsResult>;
};

export const resendCode = async (number: string) => {
  const body = {
    phoneNumber: number,
    userType: 'customer',
  };

  const result = await requestApi({
    uri: getEndpointUrl(EndPointConstants.reSendCode),
    method: 'put',
    body: body,
  });

  return result as ApiResponse<ResendCodeResult>;
};

type profileSetupType = {
  name: string;
  locationId: number;
  userType?: string;
  phone: string;
  businessName?: string;
  parentId?: number;
  categoryIds?: number[];
  address?: string;
  businessphone?: string;
};

export const profileSetup = async (body: profileSetupType) => {
  const result = await requestApi({
    uri: getEndpointUrl(EndPointConstants.profileSetup),
    method: 'POST',
    body: body,
  });
  return result as ApiResponse<UserDetailsResult>;
};

export const getCities = async () => {
  const result = await requestApi({
    uri: getEndpointUrl(EndPointConstants.city),
    method: 'GET',
  });

  return result as ApiResponse<Results<CityList>>;
};

export const getHomeScreenData = async () => {
  const result = await requestApi({
    uri: getEndpointUrl(EndPointConstants.home),
    method: 'GET',
  });

  return result as ApiResponse<Results<HomeScreenList>>;
};

export const getVenueDetail = async (id?: string) => {
  const result = await requestApi({
    uri: `${getEndpointUrl(EndPointConstants.vendorDetail)}/${id}`,
    method: 'GET',
  });
  return result as ApiResponse<VendorDetailResult>;
};

export const getVenueAlbum = async (id: string) => {
  const result = await requestApi({
    uri: `${getEndpointUrl(
      EndPointConstants.vendorAlbum,
    )}${id}?/page=1&pageSize=50`,
    method: 'GET',
  });
  return result as ApiResponse<ResultVendorAlbum>;
};

export const getVendorCategory = async () => {
  const result = await requestApi({
    uri: `${getEndpointUrl(EndPointConstants.vendorCategory)}`,
    method: 'GET',
  });
  return result as ApiResponse<VendorCategory[]>;
};

export const getVenueReviews = async (id?: string) => {
  const result = await requestApi({
    uri: `${getEndpointUrl(
      EndPointConstants.vendorReviews,
    )}${id}?/page=1&pageSize=50`,
    method: 'GET',
  });
  return result as ApiResponse<ReviewsResult>;
};

export const getSearchVenue = async (id?: string, searchText?: string) => {
  const url = `${getEndpointUrl(EndPointConstants.vendorSearch)}?locationId=${
    global.userInfo.location_id
  }&keyword=${searchText}`;

  if (id != '-1') {
    url += `&catId=${id}`;
  }

  console.log('@url ', url);

  const result = await requestApi({
    uri: url,
    method: 'GET',
  });
  return result as ApiResponse<VendorSearchResult[]>;
};

type bodyTypes = {
  vendorId: number;
  userId: number;
  rating: number;
  feedback: string;
};

export const onSubmitReview = async (body: bodyTypes) => {
  const result = await requestApi({
    uri: getEndpointUrl(EndPointConstants.addReview),
    method: 'POST',
    body: body,
  });

  return result as ApiResponseBase;
};
