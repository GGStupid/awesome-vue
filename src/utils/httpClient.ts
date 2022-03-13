import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenStatic,
} from "axios";

interface IData<T> {
  success: boolean;
  data: T;
}
class HttpClient {
  CancelToken: CancelTokenStatic = axios.CancelToken;
  axiosRequestConfig: AxiosRequestConfig = {};
  successCode: number[] = [200, 201, 204];
  axiosInstance: AxiosInstance;

  constructor(baseUrl = "/api/") {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      timeout: 3000,
      headers: {
        timestamp: new Date().getTime(),
      },
      withCredentials: true,
    });
    this.interceptorsRequest();
    this.interceptorsResponse();
  }

  private interceptorsRequest() {
    if (this.axiosInstance) {
      this.axiosInstance.interceptors.request.use(
        (config: AxiosRequestConfig) => {
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    }
  }
  private interceptorsResponse() {
    if (this.axiosInstance) {
      this.axiosInstance.interceptors.response.use(
        (response: AxiosResponse) => {
          this.responseLog(response);

          if (!this.successCode.includes(response.status)) {
            throw response;
          }

          return response.data;
        },
        (error) => {
          console.error(error.message || "出错了，请稍后再试");
          return Promise.reject(error);
        }
      );
    }
  }

  private responseLog(response: AxiosResponse) {
    if (process.env.NODE_ENV === "development") {
      const randomColor = `rgba(${Math.round(Math.random() * 255)},${Math.round(
        Math.random() * 255
      )},${Math.round(Math.random() * 255)})`;
      console.log(
        "%c┍------------------------------------------------------------------┑",
        `color:${randomColor};`
      );
      console.log("| 请求地址：", response.config.url);
      console.log("| 请求方式：", response.config.method);
      console.log("| 返回数据：", response.data);
      console.log(
        "%c┕------------------------------------------------------------------┙",
        `color:${randomColor};`
      );
    }
  }

  delete<T>(url: string, data?: unknown): Promise<IData<T>> {
    return this.axiosInstance.delete(url, { params: data });
  }
  put<T>(url: string, data?: unknown): Promise<IData<T>> {
    return this.axiosInstance.put(url, data);
  }
  get<T>(url: string, data?: unknown): Promise<IData<T>> {
    return this.axiosInstance.get(url, { params: data });
  }
  post<T>(url: string, data?: unknown): Promise<IData<T>> {
    return this.axiosInstance.post(url, data);
  }
  upload<T>(url: string, data?: unknown): Promise<IData<T>> {
    return this.axiosInstance.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new HttpClient();
