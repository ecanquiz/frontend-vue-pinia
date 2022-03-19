import { createPinia } from 'pinia'
import { useAuthStore } from '@/stores/Auth' 
import init from "@/models/Http/init.js";

test('should be initialized well', () => { 
  expect(init).toHaveProperty('handleError') 
  expect(init.handleError).toBeDefined()
  expect(init.baseURL).toBe(process.env.VUE_APP_API_URL)
  expect(init.withCredentials).toBe(true)   
})
