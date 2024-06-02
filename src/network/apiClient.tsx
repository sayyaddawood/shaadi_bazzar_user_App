import axios, {AxiosRequestConfig, Method} from 'axios';
import {BASE_URL} from './const';

export interface BaseModel {
  code?: string;
  otp?: string;
  status?: any;
  success?: any;
  message?: any;
  ResponseCode?: any;
  ResponseMessage?: any;
}

// Enums for HTTP methods and status codes
enum FetchMethod {
  GET = 'get',
  DELETE = 'delete',
  HEAD = 'head',
  OPTIONS = 'options',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  PURGE = 'purge',
  LINK = 'link',
  UNLINK = 'unlink',
}

const HTTP_SUCCESS_STATUS = 200;
const HTTP_REDIRECT_STATUS = 300;
const HTTP_CLIENT_ERROR_STATUS = 400;
const HTTP_SERVER_ERROR_STATUS = 500;

type RequestApiConfig = {
  uri: string;
  method: Method;
  body?: any;
  params?: any;
  queryString?: string;
  contentType?: string;
  onUploadProgress?: (progress: number) => void;
};

export const requestApi = async ({
  uri,
  method,
  body,
  params,
  queryString,
  contentType = 'application/json',
}: RequestApiConfig) => {
  const config: AxiosRequestConfig = {
    method,
    url: `${uri}${queryString ?? ''}`,
    baseURL: BASE_URL,
    params,
    data: JSON.stringify(body),
    headers: {
      accept: '*/*',
      'Content-Type': contentType,
    },
    responseType: 'json',
    validateStatus: (status: number) => status < HTTP_SERVER_ERROR_STATUS,
  };

  return new Promise((resolve, reject) => {
    axios
      .request(config)
      .then(response => {
        if (response.status < HTTP_CLIENT_ERROR_STATUS) {
          const result = response.data;
          if (result !== undefined) {
            resolve(result);
          } else {
            const errorMessage =
              'Model data is not mapped, kindly check your API response.';
            reject(errorMessage);
            console.error(errorMessage);
          }
        } else {
          reject(
            response.data ||
              'Error model data is not mapped, kindly check your API response.',
          );
        }
      })
      .catch(error => {
        reject(`Something went wrong --> ${error}`);
      });
  });
};

export async function requestFetch<Type>(
  uri: string,
  method: FetchMethod,
  body?: any,
  params?: string,
  queryString?: string,
): Promise<Type> {
  const config: RequestInit = {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ', // Replace with actual token
    },
  };

  const url = `${BASE_URL}${uri}${queryString ?? ''}${params ?? ''}`;

  return new Promise<Type>((resolve, reject) => {
    fetch(url, config)
      .then(response => {
        return response.json().then(data => {
          const responseModel: BaseModel = data as BaseModel;
          if (responseModel.code === '200') {
            resolve(responseModel as Type);
          } else {
            const errorMessage =
              responseModel.message || 'Base model not mapped';
            reject(`Api result: ${errorMessage}`);
            console.error(
              `Api result base model not mapped: ${errorMessage}`,
              'response',
              data,
            );
          }
        });
      })
      .catch(error => {
        const errorMessage = `Something went wrong: ${error}`;
        reject(errorMessage);
        console.error(
          'Api result:',
          errorMessage,
          '\nuri:',
          uri,
          '\nmethod:',
          method,
          '\nbody:',
          body,
          '\nparams:',
          params,
          '\nqueryString:',
          queryString,
        );
      });
  });
}
