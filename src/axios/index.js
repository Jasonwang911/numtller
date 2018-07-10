import axios from 'axios'

// create an axios instance
let baseConfig = {
  baseURL: 'http://127.0.0.1:3000', // api的base_url
  withCredentials: true,
  timeout: 10000, // request timeout
  headers: {
    // 'Content-Type': 'application/json; charset=utf-8',
    // 'authorization':`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MzExODYxMzAsImV4cCI6MTUzMTI3MjUzMH0.Ik58GVl_MUWt3ZtlJzLpGCfHVePN1rEEsSxDxKorQOw`
  }
}

const service = axios.create(baseConfig)

// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(response => {
     return response;
},error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
})

export default service
