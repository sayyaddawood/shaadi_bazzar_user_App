import {
  ApiResponse,
  CityList,
  LoginResponseData,
  Result,
  Results,
  UserData,
} from '../models/RequestTypes';
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
  return result as ApiResponse<Result<UserData>>;
};

type profileSetupType = {
  name: string;
  locationId: string;
  userType?: string;
  phone: string;
};

export const profileSetup = async (body: profileSetupType) => {
  body['userType'] = 'customer';

  let result = await requestApi({
    uri: getEndpointUrl(EndPointConstants.profileSetup),
    method: 'POST',
    body: body,
  });
  return result as ApiResponse<Result<UserData>>;
};

export const getCities = async () => {
  let result = await requestApi({
    uri: getEndpointUrl(EndPointConstants.city),
    method: 'GET',
  });

  return result as ApiResponse<Results<CityList>>;
};
