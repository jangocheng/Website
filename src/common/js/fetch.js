import axios from 'axios'
import qs from 'qs'

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  //在发送请求之前做某件事
  if(config.method  === 'post'){
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
  //对响应数据做些事
  return res.status === 200 ? res.data : res
}, (error) => {
  return Promise.reject(error);
})

export function ajax(type, url, params) {
    if (type === "get") {
      return axios.get(url, params)

    } else if (type === "post") {
      return axios.post(url, params)

    } else if (type === "put") {
      return axios.put(url, params)

    } else if (type === "delete") {
      return axios.delete(url, params)

    }
}

// axios 配置
axios.defaults.baseURL = 'http://www.ncs-cyber.com.cn/cyber'
// axios.defaults.baseURL = 'http://103.231.146.242:28732/cyber'
// axios.defaults.timeout = 5000;



