interface Location {
  name: string;
}

interface Address {
  full_address: string;
  location: Location;
}

interface VendorMedia {
  sequence: number;
  type: string;
  path: string;
  image_type: string;
}

interface VendorDetails {
  business_name: string;
  business_phone: string;
  f_price: number | null;
  facebook_page_link: string;
  instagram_page_link: string | null;
  website_link: string | null;
  description: string | null;
  id: number;
  address: Address;
  vendorMedia: VendorMedia[];
  questions: Questions[]
}

export interface AnswerType {
  id: number;
  answers: string;
  status: boolean;
}

export interface Questions {
  id: number;
  question: string;
  vendor_category_id: number;
  status: boolean;
  vendorsAnswers: AnswerType[];
}

export interface QuestionType {
  questions: Questions[];
}

interface Package {
  name: string;
  details: string;
  price: number;
  booking_price: number;
  createdAt: string;
}

interface VendorAlbumMedia {
  sequence: number;
  type: string;
  path: string;
}

interface VendorAlbum {
  name: string;
  id: number;
  vendorMedia: VendorAlbumMedia[];
}

interface LockedDate {
  date: string; // ISO string
  day: boolean;
  night: boolean;
  vendor_id: number;
}

interface VendorDetailResult {
  vendorDetails: VendorDetails;
  packages: Package[];
  vendorAlbums: VendorAlbum[];
  lockedDates: LockedDate[];
}

interface ResultVendorAlbum {
  totalPages: number;
  currentPage: number;
  vendorAlbums: VendorAlbum[];
}

interface VendorCategoryChild {
  name: string;
  id: number;
}
interface VendorCategory {
  name?: string;
  id?: number;
  icon?: string | null;
  children?: VendorCategoryChild[];
  flag?: boolean;
  images: string;
  color_code: string;
}

interface CombinedReviews {
  count: number;
  averageScore: number;
}

interface User {
  name: string;
  profile_image: string | null;
}

interface Review {
  feedback: string;
  rating: number;
  createdAt: string;
  user: User;
}

interface ReviewsResult {
  totalPages: number;
  currentPage: number;
  reviews: Review[];
  combinedReviews: CombinedReviews;
}

interface VendorMediaSearch {
  path: string;
}

interface AddressSearch {
  full_address: string;
}

interface VendorSearchResult {
  id: number;
  business_name: string;
  vendorMedia: VendorMedia[];
  address: AddressSearch;
  vendorCategory: string;
}
