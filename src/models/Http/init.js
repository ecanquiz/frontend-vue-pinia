import { computed } from "vue"
import { useAuthStore } from '@/stores/Auth'

export default {  
  baseURL: process.env.VUE_APP_API_URL,  
  withCredentials: true, 
  handleError(error) {  
    const storeAuth = computed(() => useAuthStore())
    
    if (error.response
      && [401, 419].includes(error.response.status)    
      && auth.value.authUser 
      && !auth.value.guest
    ) {
      storeAuth.value.logout();
    }
    
    return Promise.reject(error);
  }
}
