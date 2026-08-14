export interface UserDetails {
  name: string;
  profile_image: string | null;
  email: string | null;
  phone: string;
  city: string | null;
  location_id: number;
  user_type: string;
  update_by: string | null;
  id: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Data {
  password: string | null;
  user_name: string | null;
  phone: string;
  code: number;
  is_account_verified: boolean;
  user_type: string;
  update_by: string | null;
  id: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserDetailsResult {
  access_token: string;
  refresh_token: string;
  expiry: string;
  data?: Data;
  userDetail: UserDetails[];
}
