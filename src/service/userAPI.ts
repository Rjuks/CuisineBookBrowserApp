import axios, { AxiosResponse } from 'axios';
import { UserCredentials } from '../store/features/user/userTypes';

interface UserTokenDB {
  token: string;
  expiration: string;
}

interface SignUpDB {
  data: boolean;
  errors: null;
  message: string;
  succeeded: boolean;
}

export const signInUserAPI = async (
  credentials: UserCredentials
): Promise<AxiosResponse<UserTokenDB>> => {
  return await axios.post(
    `${process.env.REACT_APP_ENDPOINT_URL}/api/Identity/Login`,
    credentials
  );
};

export const signUpUserAPI = async (
  credentials: UserCredentials
): Promise<AxiosResponse<any>> => {
  return await axios.post(
    `${process.env.REACT_APP_ENDPOINT_URL}/api/Identity/Register`,
    credentials
  );
};
