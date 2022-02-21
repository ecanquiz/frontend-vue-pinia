import ApiService from "./ApiService";

export default {
    async login(payload) {
    console.log("-------------------");
    console.log(process.env.VUE_APP_API_URL);
    console.log("-------------------");
    await ApiService.get("/sanctum/csrf-cookie");
    return ApiService.post("/login", payload);
  },
  logout() {
    return ApiService.post("/logout");
  },
  async forgotPassword(payload) {
    await ApiService.get("/sanctum/csrf-cookie");
    return ApiService.post("/forgot-password", payload);
  },
  getAuthUser() {
    return ApiService.get("/api/users/auth");
  },
  async resetPassword(payload) {
    await ApiService.get("/sanctum/csrf-cookie");
    return ApiService.post("/reset-password", payload);
  },
  updatePassword(payload) {
    return ApiService.put("/user/password", payload);
  },
  async registerUser(payload) {
    await ApiService.get("/sanctum/csrf-cookie");
    return ApiService.post("/register", payload);
  },
  sendVerification(payload) {
    return ApiService.post("/email/verification-notification", payload);
  },
  updateUser(payload) {
    return ApiService.put("/user/profile-information", payload);
  },
};
