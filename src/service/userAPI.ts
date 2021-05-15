import axios, { AxiosResponse } from 'axios';

interface UserTokenDB {
  accessToken: string;
}

export const signInUserAPI = async ({
  credentials
}: any): Promise<AxiosResponse<UserTokenDB>> => {
  return await axios.post(`http://localhost:48398/api/Identity/Login`, {
    username: 'testAdmin',
    password: 'test'
  });
};
