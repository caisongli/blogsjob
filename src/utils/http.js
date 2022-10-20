import axios from 'axios';
const ins = axios.create({
  baseURL: 'https://api.apiopen.top/api',
  timeout: 20000
});
ins.interceptors.request.use(config => {
  // config.headers.params= '';
  return config

}, error => console.log(error))
//
ins.interceptors.response.use(response => {
  if (response.status === 200) {
    return response.data ? response.data.result : response
  } else {
    alert('服务器错误')
  }

}, error => console.log(error))

export const http = {
  async get (url, params) {
    const res = await ins.get(url, { params });
    // console.log(res);
    return Promise.resolve(res);
  },
  async post (url, data) {
    const res = await ins.post(url, data);
    // console.log(res);
    return res;
  },
}