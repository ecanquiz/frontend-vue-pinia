import { authClient } from "@/services/ApiService.js"; 

describe('ApiService', () => {
  it('should be configured well', () => {
    expect(authClient.defaults.baseURL).toBe(process.env.VUE_APP_API_URL)
    expect(authClient.defaults.withCredentials).toBe(true)
  })
})
