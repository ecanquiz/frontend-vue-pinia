import axios from "axios";

class ApiService {
  constructor(
    //customHeaders = false,
    //customParams = false,
    handleError = this.handleError,
    handleSuccess = this.handleSuccess
  ) {
    let service = axios.create({
      //headers: customHeaders,
      //params: customParams,
      baseURL: process.env.VUE_APP_API_URL,  
      withCredentials: true,
    });
    service.interceptors.response.use(handleSuccess, handleError);
    this.service = service;
  }
  // default handle success function
  handleSuccess(response) {
    return response;
  }
  // default handle error function
  handleError(error) {
    return error;
  }

  get(path) {
    return this.service.request({
      method: "GET",
      url: path,
      responseType: "json"
    });
  }

  patch(path, payload) {
    return this.service.request({
      method: "PATCH",
      url: path,
      responseType: "json",
      data: payload
    });
  }

  post(path, bodyPayload = false) {
    return this.service.request({
      method: "POST",
      url: path,
      responseType: "json",
      data: bodyPayload
    });
  }

  delete(path, bodyPayload = false) {
    return this.service.request({
      method: "DELETE",
      url: path,
      responseType: "json",
      data: bodyPayload
    });
  }
}

export default new ApiService();
