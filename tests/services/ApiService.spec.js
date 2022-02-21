import ApiService from "@/services/ApiService.js"; 

describe('ApiService', () => {
  it('should be configured well', () => {
  //console.log(ApiService)
    expect(ApiService.service.defaults.baseURL).toBe(process.env.VUE_APP_API_URL)
    expect(ApiService.service.defaults.withCredentials).toBe(true)
  })
})
