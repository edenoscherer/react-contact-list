import axios, { AxiosError } from "axios";

import { Person } from "../model";
console.log(import.meta.env.VITE_API_URL);
export const Api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export type ErrorResponse = {
  error: string;
  message: string;
  stack?: string;
};

export type DefaultResponse<T = unknown> = {
  success: boolean;
  data: T;
};

export type AddContactParams = {
  name: string;
  contacts: {
    type: "email" | "phone" | "whatsapp";
    value: string;
  }[];
};

export const AddContact = (
  params: AddContactParams,
): Promise<DefaultResponse<Person> | ErrorResponse> => {
  return Api.post<DefaultResponse<Person> | ErrorResponse>("contacts", params)
    .then(res => {
      return res.data;
    })
    .catch((error: AxiosError) => {
      const err = error as Error;
      return {
        error: err.name,
        message: err.message,
      };
    });
};

export const ListContacts = (): Promise<
  DefaultResponse<Person[]> | ErrorResponse
> => {
  return Api.get<DefaultResponse<Person[]> | ErrorResponse>("contacts")
    .then(res => {
      return res.data;
    })
    .catch((error: AxiosError) => {
      const err = error as Error;
      return {
        error: err.name,
        message: err.message,
      };
    });
};

export const RemoveContact = (
  id: number,
): Promise<DefaultResponse<boolean> | ErrorResponse> => {
  return Api.delete<DefaultResponse<boolean> | ErrorResponse>(`contacts/${id}`)
    .then(res => {
      return res.data;
    })
    .catch((error: AxiosError) => {
      const err = error as Error;
      return {
        error: err.name,
        message: err.message,
      };
    });
};

export const GetContact = (
  id: number,
): Promise<DefaultResponse<Person> | ErrorResponse> => {
  return Api.get<DefaultResponse<Person> | ErrorResponse>(`contacts/${id}`)
    .then(res => {
      return res.data;
    })
    .catch((error: AxiosError) => {
      const err = error as Error;
      return {
        error: err.name,
        message: err.message,
      };
    });
};

export const EditContact = (
  id: number,
  params: AddContactParams,
): Promise<DefaultResponse<Person> | ErrorResponse> => {
  return Api.put<DefaultResponse<Person> | ErrorResponse>(`contacts/${id}`, {
    ...params,
    id,
  })
    .then(res => {
      return res.data;
    })
    .catch((error: AxiosError) => {
      const err = error as Error;
      return {
        error: err.name,
        message: err.message,
      };
    });
};
