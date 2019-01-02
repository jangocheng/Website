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
  return res;
}, (error) => {
  return Promise.reject(error);
})

export function ajax(type, url, params) {
  return new Promise((resolve, reject) => {
    if (type === "get") {
      axios.get(url, params)
        .then(response => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    } else if (type === "post") {
      axios.post(url, params)
        .then(response => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    } else if (type === "put") {
      axios.put(url, params)
        .then(response => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    } else if (type === "delete") {
      axios.delete(url, params)
        .then(response => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    }
  })
}



