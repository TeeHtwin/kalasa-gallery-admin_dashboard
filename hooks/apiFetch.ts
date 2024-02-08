import axios, { AxiosError } from 'axios';

const axiosCreate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL + '/api',
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export const get = async (url: string, headers = {}) => {
  try {
    await axiosCreate
      .get(url, { headers, cancelToken: source.token })
      .then((res) => {
        return res.data;
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
  } catch (error: unknown) {
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
