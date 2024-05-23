import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios'

interface HYRequestInterceptors {
  requestInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors
}

class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request({ ...config, method: 'GET' })
  }
  get(config: HYRequestConfig) {
    return this.request({ ...config, method: 'GET' })
  }

  post(config: HYRequestConfig) {
    return this.request({ ...config, method: 'POST' })
  }

  delete(config: HYRequestConfig) {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch(config: HYRequestConfig) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default HYRequest
