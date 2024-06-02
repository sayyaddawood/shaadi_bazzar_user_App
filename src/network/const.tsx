export let BASE_URL_DEV = 'https://staging-t9umb.ondigitalocean.app/';
export let BASE_URL_UAT = '';

export let BASE_URL = BASE_URL_DEV;

const api = 'api/';

export enum EndPointConstants {
  login = 'auth/authentication',
  OtpVerification = "auth/verfication",
  profileSetup = "auth/profileSetup",
  city = "location",
}

export const getEndpointUrl = (endPoint: EndPointConstants): string => {
  return `${BASE_URL}${api}${endPoint}`;
};
