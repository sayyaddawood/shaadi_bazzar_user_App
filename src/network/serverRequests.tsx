import {
  ApiResponse,
  ApiResponseBase,
  CityList,
  HomeScreenList,
  LoginResponseData,
  ResendCodeResult,
  Result,
  Results,
  Vendor,
  VendorSubCategoryResult,
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

export const getHomeScreenData = async (cityId: string) => {
  const url = `${getEndpointUrl(EndPointConstants.home)}${cityId}`;
  const result = await requestApi({
    uri: url,
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

export const getVendorCategory = async (id?: string) => {
  const idAvailable = id != '-1' ? id : '';
  const url = `${getEndpointUrl(EndPointConstants.vendors)}${idAvailable}`;
  const result = await requestApi({
    uri: `${url}`,
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
  let url = `${getEndpointUrl(EndPointConstants.vendorSearch)}?locationId=${
    global.selectedLocId ?? global.userInfo.location_id
  }&keyword=${searchText}`;

  if (id != '-1') {
    url += `&catId=${id}`;
  }
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

type bodyTypeLeads = {
  user_id: number;
  vendor_id: number;
  leads_contact_type: string;
  phone?: string;
  name?: string;
  email?: string;
  details?: string;
  lead_date?: string;
};
export const onSubmitLeads = async (body: bodyTypeLeads) => {
  const result = await requestApi({
    uri: getEndpointUrl(EndPointConstants.customerLead),
    method: 'POST',
    body: body,
  });

  return result as ApiResponseBase;
};

export const getSubCategories = async (id?: string) => {
  const url = `${getEndpointUrl(EndPointConstants.subCategories)}?loc_id=${
    global.selectedLocId ?? global.userInfo.location_id
  }&cat_id=${id}&page=1&pageSize=50`;
  const result = await requestApi({
    uri: `${url}`,
    method: 'GET',
  });
  return result as ApiResponse<Results<VendorSubCategoryResult>>;
};

type tokenBody = {
  phone: string;
  newNotificationToken: string;
  userType: string;
};

export const onSubmitFCMToken = async (body: tokenBody) => {
  const result = await requestApi({
    uri: getEndpointUrl(EndPointConstants.fcmToken),
    method: 'PUT',
    body: body,
  });
  return result as ApiResponseBase;
};
export const onSubmitAddViews = async (vendorId: string, userId: string) => {
  const body = {
    vendorId: Number(vendorId),
    viewsData: [
      {
        user_id: userId,
      },
    ],
  };
  const result = await requestApi({
    uri: getEndpointUrl(EndPointConstants.addViews),
    method: 'POST',
    body: body,
  });
  return result;
};
