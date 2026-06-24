import axios from "axios";

const TOKEN_KEY = "corehives_admin_token";
const LOGIN_PATH = "/admin-login";

const adminAxios = axios.create({
  baseURL: (import.meta.env.VITE_API_URL || "") + "/api/v1",
  timeout: 15000,
});

adminAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

adminAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem(TOKEN_KEY);
      if (window.location.pathname !== LOGIN_PATH) {
        window.location.assign(LOGIN_PATH);
      }
    }
    return Promise.reject(error);
  }
);

const USER_KEY = "corehives_admin_user";

// Authenticate with username + password. Uses a bare axios call so the
// 401 response interceptor above doesn't hijack a failed login attempt.
// On success: persists the returned bearer token (+ username) and returns it.
export async function loginAdmin(username, password) {
  const baseURL = (import.meta.env.VITE_API_URL || "") + "/api/v1";
  const { data } = await axios.post(`${baseURL}/auth/login`, {
    username,
    password,
  });
  const token = data?.data?.token;
  if (!token) throw new Error("No token returned from server");
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, data?.data?.user?.username || username);
  return token;
}

export function logoutAdmin() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export { TOKEN_KEY, USER_KEY };
export default adminAxios;
