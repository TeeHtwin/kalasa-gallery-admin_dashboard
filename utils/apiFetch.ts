'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

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
      const { message } = errors?.data;
      toast.error(message, {
        position: 'top-right',
      });
    }
    if (error?.status === 500) {
      const router = useRouter();
      router.push('/server-error');
    }
    // alert(error);
  },
);

export const get = async (url: string, headers = {}) => {
  try {
    return await axiosCreate
      .get(url, { headers, cancelToken: source.token })
      .then((res) => {
        // if (res) {
        //   console.log('response data:', res.data);
        //   const responseData = res.data;
        //   if (responseData?.success) {
        //     return responseData;
        //   }
        //   return res.data?.data;
        // }
        if (res) {
          return res.data?.data;
        }

        return {
          data: [],
          total: 0,
        };
      });
  } catch (err) {
    toast.error(err as string, {
      position: 'top-right',
    });
  }
};

export const post = async (url: string, headers = {}, body: unknown) => {
  try {
    return await axiosCreate
      .post(url, body, {
        headers,
        cancelToken: source.token,
      })
      .then((res) => {
        if (res) {
          return res.data;
        }
        return null;
      });
  } catch (error) {
    toast.error(error as string, {
      position: 'top-right',
    });
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
    return await axiosCreate.delete(url, { headers }).then((res) => {
      return res.data;
    });
  } catch (err) {
    console.log(err);
    return err;
  }
};
