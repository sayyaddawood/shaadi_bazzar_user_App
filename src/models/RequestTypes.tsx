export interface ApiResponseBase {
  message: string;
  code: number;
}

export interface ApiResponse<T> extends ApiResponseBase {
  result: T;
}

export interface LoginResponseData {
  phone: string;
  userType: string;
}

export interface Result<T> {
  data: T;
}

export type Results<T> = T;

export interface UserData {
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

interface City {
  name: string;
  update_by: string | null;
  id: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export type CityList = City[];
