import {
  ApiResponse,
  CityList,
  HomeScreenList,
  LoginResponseData,
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

  console.log(JSON.stringify(body));

  let result = await requestApi({
    uri: getEndpointUrl(EndPointConstants.OtpVerification),
    method: 'POST',
    body: body,
  });

  return result as ApiResponse<UserDetailsResult>;
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
  let result = await requestApi({
    uri: getEndpointUrl(EndPointConstants.profileSetup),
    method: 'POST',
    body: body,
  });
  return result as ApiResponse<UserDetailsResult>;
};

export const getCities = async () => {
  let result = await requestApi({
    uri: getEndpointUrl(EndPointConstants.city),
    method: 'GET',
  });

  return result as ApiResponse<Results<CityList>>;
};

export const getHomeScreenData = async () => {
  let result = await requestApi({
    uri: getEndpointUrl(EndPointConstants.home),
    method: 'GET',
  });

  return result as ApiResponse<Results<HomeScreenList>>;
};

export const getVenueDetail = async (id?: string) => {
  let result = await requestApi({
    uri: `${getEndpointUrl(EndPointConstants.vendorDetail)}/${id}`,
    method: 'GET',
  });
  return result as ApiResponse<VendorDetailResult>;
};

export const getVenueAlbum = async (id: string) => {
  let result = await requestApi({
    uri: `${getEndpointUrl(
      EndPointConstants.vendorAlbum,
    )}${id}?/page=1&pageSize=50`,
    method: 'GET',
  });
  return result as ApiResponse<ResultVendorAlbum>;
};

export const getVendorCategory = async () => {
  let result = await requestApi({
    uri: `${getEndpointUrl(EndPointConstants.vendorCategory)}`,
    method: 'GET',
  });
  return result as ApiResponse<VendorCategory[]>;
};

export const getVenueReviews = async (id?: string) => {
  let result = await requestApi({
    uri: `${getEndpointUrl(
      EndPointConstants.vendorReviews,
    )}${id}?/page=1&pageSize=50`,
    method: 'GET',
  });
  return result as ApiResponse<ReviewsResult>;
};

export const getSearchVenue = async (id?: string, searchText?: string) => {
  let url = `${getEndpointUrl(EndPointConstants.vendorSearch)}?locationId=${
    global.userInfo.location_id
  }&keyword=${searchText}`;

  if (id != '-1') {
    url += `&catId=${id}`;
  }

  console.log("@url ", url)
  
  let result = await requestApi({
    uri: url,
    method: 'GET',
  });
  return result as ApiResponse<VendorSearchResult[]>;
};
