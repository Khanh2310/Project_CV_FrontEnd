import {
  IBackendRes,
  ICompany,
  IAccount,
  IUser,
  IModelPaginate,
  IGetAccount,
  IJob,
  IResume,
} from "@/types/backend";
import axios from "config/axios-customize";

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
  return axios.post<IBackendRes<IUser>>("/v1/api/auth/register", {
    name,
    email,
    password,
    age,
    gender,
    address,
  });
};

export const callLogin = (username: string, password: string) => {
  return axios.post<IBackendRes<IAccount>>("/v1/api/auth/login", {
    username,
    password,
  });
};

export const callFetchAccount = () => {
  return axios.get<IBackendRes<IGetAccount>>("/v1/api/auth/account");
};

export const callRefreshToken = () => {
  return axios.get<IBackendRes<IAccount>>("/v1/api/auth/refresh");
};

export const callLogout = () => {
  return axios.post<IBackendRes<string>>("/v1/api/auth/logout");
};

/**
 * Upload single file
 */
export const callUploadSingleFile = (file: any, folderType: string) => {
  const bodyFormData = new FormData();
  bodyFormData.append("fileUpload", file);
  return axios<IBackendRes<{ fileName: string }>>({
    method: "post",
    url: "/v1/api/files/upload",
    data: bodyFormData,
    headers: {
      "Content-Type": "multipart/form-data",
      folder_type: folderType,
    },
  });
};

/**
 * 
Module Company
 */
export const callCreateCompany = (
  name: string,
  address: string,
  description: string,
  logo: string
) => {
  return axios.post<IBackendRes<ICompany>>("/v1/api/companies", {
    name,
    address,
    description,
    logo,
  });
};

export const callUpdateCompany = (
  id: string,
  name: string,
  address: string,
  description: string,
  logo: string
) => {
  return axios.patch<IBackendRes<ICompany>>(`/v1/api/companies/${id}`, {
    name,
    address,
    description,
    logo,
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

export const callFetchCompanyById = (id: string) => {
  return axios.get<IBackendRes<ICompany>>(`/v1/api/companies/${id}`);
};

/**
 * 
Module User
 */
export const callCreateUser = (user: IUser) => {
  return axios.post<IBackendRes<IUser>>("/v1/api/users", { ...user });
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

/**
 * 
Module Job
 */
export const callCreateJob = (job: IJob) => {
  return axios.post<IBackendRes<IJob>>("/v1/api/jobs", { ...job });
};

export const callUpdateJob = (job: IJob, id: string) => {
  return axios.patch<IBackendRes<IJob>>(`/v1/api/jobs/${id}`, { ...job });
};

export const callDeleteJob = (id: string) => {
  return axios.delete<IBackendRes<IJob>>(`/v1/api/jobs/${id}`);
};

export const callFetchJob = (query: string) => {
  return axios.get<IBackendRes<IModelPaginate<IJob>>>(`/v1/api/jobs?${query}`);
};

export const callFetchJobById = (id: string) => {
  return axios.get<IBackendRes<IJob>>(`/v1/api/jobs/${id}`);
};

/**
 * 
Module Resume
 */
export const callCreateResume = (url: string, companyId: any, jobId: any) => {
  return axios.post<IBackendRes<IResume>>("/v1/api/resumes", {
    url,
    companyId,
    jobId,
  });
};

export const callUpdateResumeStatus = (id: any, status: string) => {
  return axios.patch<IBackendRes<IResume>>(`/v1/api/resumes/${id}`, { status });
};

export const callDeleteResume = (id: string) => {
  return axios.delete<IBackendRes<IResume>>(`/v1/api/resumes/${id}`);
};

export const callFetchResume = (query: string) => {
  return axios.get<IBackendRes<IModelPaginate<IResume>>>(
    `/v1/api/resumes?${query}`
  );
};

export const callFetchResumeById = (id: string) => {
  return axios.get<IBackendRes<IResume>>(`/v1/api/resumes/${id}`);
};

export const callFetchResumeByUser = () => {
  return axios.post<IBackendRes<IResume>>(`/v1/api/resumes/by-user`);
};
