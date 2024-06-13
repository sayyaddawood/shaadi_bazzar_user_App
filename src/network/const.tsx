export let BASE_URL_DEV = 'https://staging-t9umb.ondigitalocean.app/';
export let BASE_URL_IMAGE =
  'https://hydimages.sgp1.cdn.digitaloceanspaces.com/';
export let BASE_URL_UAT = '';

export let BASE_URL = BASE_URL_DEV;

const api = 'api/';

export enum EndPointConstants {
  login = 'auth/authentication',
  OtpVerification = 'auth/verfication',
  profileSetup = 'auth/profileSetup',
  city = 'location',
  home = 'customerapp/homescreen/1',
  vendorCategory = 'customerapp/vendorCategories/', // pending
  vendorDetail = 'customerapp/vendorDetails',
  vendorAlbum = 'customerapp/vendorAlbums/', 
  vendorReviews = 'customerapp/vendorReviews/', 
  vendorSearch = 'customerapp/searchVendor', 
  addReview = "customerapp/addReview"
}

export const getEndpointUrl = (endPoint: EndPointConstants): string => {
  return `${BASE_URL}${api}${endPoint}`;
};
