import axios, { AxiosError } from 'axios';
import { useSession } from 'next-auth/react';

const axiosCreate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL + '/api',
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axiosCreate.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errors = error.response;
    console.log('errors::', errors);
    if (errors?.status === 401) {
      const { update } = useSession();
      update({
        user: null,
      });
    }
    alert(error);
  },
);

export const get = async (url: string, headers = {}) => {
  try {
    return await axiosCreate
      .get(url, { headers, cancelToken: source.token })
      .then((res) => {
        console.log('response::', res);
        return res.data?.data;
      });
  } catch (err) {
    alert(err);
  }
};

export const post = async (url: string, headers = {}, body: unknown) => {
  try {
    await axiosCreate
      .post(url, body, {
        headers,
        cancelToken: source.token,
      })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const put = async (url: string, headers = {}, body: unknown) => {
  try {
    return await axiosCreate.put(url, body, { headers });
  } catch (err) {
    alert(err);
  }
};

export const patch = async (url: string, headers = {}, body: unknown) => {
  try {
    return await axiosCreate.patch(url, body, { headers });
  } catch (err) {
    console.log(err);
  }
};

export const del = async (url: string, headers = {}) => {
  try {
    return await axiosCreate.delete(url);
  } catch (err) {
    console.log(err);
  }
};
