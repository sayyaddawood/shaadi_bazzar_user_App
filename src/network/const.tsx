export let BASE_URL_DEV = 'https://staging-t9umb.ondigitalocean.app/';
export let BASE_URL_IMAGE =
  'https://hydimages.sgp1.cdn.digitaloceanspaces.com/';
export let BASE_URL_PROD = 'https://sea-lion-app-vd3vz.ondigitalocean.app/';

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
}

export const getEndpointUrl = (endPoint: EndPointConstants): string => {
  return `${BASE_URL}${api}${endPoint}`;
};
