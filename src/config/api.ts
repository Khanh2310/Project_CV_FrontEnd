import {
  IBackendRes,
  ICompany,
  IAccount,
  IUser,
  IModelPaginate,
  IGetAccount,
} from '@/types/backend';
import axios from 'config/axios-customize';

/**
 * 
Module Auth
 */
export const callRegister = (
  name: string,
  email: string,
  password: string,
  age: number,
  gender: string,
  address: string
) => {
  return axios.post<IBackendRes<IUser>>('/v1/api/auth/register', {
    name,
    email,
    password,
    age,
    gender,
    address,
  });
};

export const callLogin = (username: string, password: string) => {
  return axios.post<IBackendRes<IAccount>>('/v1/api/auth/login', {
    username,
    password,
  });
};

export const callFetchAccount = () => {
  return axios.get<IBackendRes<IGetAccount>>('/v1/api/auth/account');
};

export const callRefreshToken = () => {
  return axios.get<IBackendRes<IAccount>>('/v1/api/auth/refresh');
};

export const callLogout = () => {
  return axios.post<IBackendRes<string>>('/v1/api/auth/logout');
};

/**
 * 
Module Company
 */
export const callCreateCompany = (
  name: string,
  address: string,
  description: string
) => {
  return axios.post<IBackendRes<ICompany>>('/v1/api/companies', {
    name,
    address,
    description,
  });
};

export const callUpdateCompany = (
  id: string,
  name: string,
  address: string,
  description: string
) => {
  return axios.patch<IBackendRes<ICompany>>(`/v1/api/companies/${id}`, {
    name,
    address,
    description,
  });
};

export const callDeleteCompany = (id: string) => {
  return axios.delete<IBackendRes<ICompany>>(`/v1/api/companies/${id}`);
};

export const callFetchCompany = (query: string) => {
  return axios.get<IBackendRes<IModelPaginate<ICompany>>>(
    `/v1/api/companies?${query}`
  );
};

/**
 * 
Module User
 */
export const callCreateUser = (user: IUser) => {
  return axios.post<IBackendRes<IUser>>('/v1/api/users', { ...user });
};

export const callUpdateUser = (user: IUser) => {
  return axios.patch<IBackendRes<IUser>>(`/v1/api/users`, { ...user });
};

export const callDeleteUser = (id: string) => {
  return axios.delete<IBackendRes<IUser>>(`/v1/api/users/${id}`);
};

export const callFetchUser = (query: string) => {
  return axios.get<IBackendRes<IModelPaginate<IUser>>>(
    `/v1/api/users?${query}`
  );
};
