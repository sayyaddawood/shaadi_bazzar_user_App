export let BASE_URL_DEV = 'https://staging-t9umb.ondigitalocean.app/';
export let BASE_URL_IMAGE =
  'https://s3.ap-southeast-1.amazonaws.com/bucket.wedeasy.pro/';
export let BASE_URL_PROD = 'https://wedeasybackendserver.eclatechsolution.com/';

export let BASE_URL = BASE_URL_PROD;

const api = 'api/';

export enum EndPointConstants {
  login = 'auth/authentication',
  reSendCode = 'auth/resendCode',
  OtpVerification = 'auth/verfication',
  profileSetup = 'auth/profileSetup',
  city = 'location',
  home = 'customerapp/homescreen/',
  vendorCategory = 'customerapp/vendorCategories/',
  vendorDetail = 'customerapp/vendorDetails',
  vendorAlbum = 'customerapp/vendorAlbums/',
  vendorReviews = 'customerapp/vendorReviews/',
  vendorSearch = 'customerapp/searchVendor',
  addReview = 'customerapp/addReview',
  subCategories = 'customerapp/vendors',
  customerLead = 'customerLeads',
  vendors = 'vendorcategories/',
  fcmToken = 'auth/updateNotification',
  addViews = 'views/addViews',
}

export const getEndpointUrl = (endPoint: EndPointConstants): string => {
  return `${BASE_URL}${api}${endPoint}`;
};
