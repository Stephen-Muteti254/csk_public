import api from "@/lib/api";

export const AuthApi = {
  login(email: string, password: string) {
    return api.post("/auth/login", {
      email,
      password,
    });
  },

  me() {
    return api.get("/auth/me");
  },

  refresh(refreshToken: string) {
    return api.post("/auth/refresh", {
      refresh_token: refreshToken,
    });
  },

  logout() {
    return api.post("/auth/logout");
  },
};