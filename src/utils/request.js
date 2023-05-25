import axios from 'axios'
import { getToken } from './auth'
import { ElMessage } from 'element-plus'

const http = axios.create({
  headers: {},
  baseURL: '/gezida-api',
  // paramsSerializer: function(params) {
  //   // return qs.stringify(params, { arrayFormat: 'repeat' })
  //   return params
  // }
})

// request interceptor
http.interceptors.request.use(
  config => {
    // do something before request is sent
    const token = getToken()
    if (token) {
      config.headers['X-Access-Token'] = `${token}`
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
http.interceptors.response.use(
  response => {
    const res = response.data
    if (res && res.code !== 200) {
      ElMessage.error(res.message)
      return Promise.reject(res)
    }
    return res
  },
  error => {
    ElMessage.error('服务器错误')
    return Promise.reject(error)
  }
)

export default http
