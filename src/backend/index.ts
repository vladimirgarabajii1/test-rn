import axios from 'axios';
import configs from '../configs';


export type UserType = {
  name: string,
  type: string,
  useSsl?: boolean,
  id: number,
  port: string,
  serverAddress: string;
  serverPath?: string;
}


const createUser = async (userData: {name: string}): Promise<unknown> => {
  const result = await axios.post('/user', userData, {
    baseURL: configs.backend.uri,
  });

  return result.data;
};

const getUserList = async (): Promise<UserType[]> => {
  const result = await axios.get('/user/list', {
    baseURL: configs.backend.uri,
  });

  return result.data;
};

export default {
  createUser,
  getUserList,
};
