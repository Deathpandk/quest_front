import axios from "axios";

const baseUrl = import.meta.env["VITE_API_DOMAIN"];

const api = axios.create({
  baseURL: baseUrl,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const request = error.config;
    if (error.response.status !== 403 || request._retry) {
      return Promise.reject(error);
    }
    const refreshToken = localStorage.getItem("refresh");
    if (refreshToken === null) {
      return Promise.reject(error);
    }
    try {
      await refreshAuth(refreshToken);
      request.headers = getAuthHeaders();
      request._retry = true;
      return axios(request);
    } catch (err) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return Promise.reject(error);
    }
  },
);

export function getAuthHeaders() {
  let access_token = localStorage.getItem("access");
  if (access_token) {
    return {
      Authorization: `Bearer ${access_token}`,
    };
  } else {
    return null;
  }
}

const refreshAuth = async (refreshToken) => {
  let response = await post("auth/refresh/", { refresh: refreshToken });
  localStorage.setItem("access", response.data.access);
};

export const get = async (path, params = {}, useAuth = false) => {
  let headers = {};
  if (useAuth) {
    headers = getAuthHeaders();
  }

  return await api.get(path, {
    params: params,
    headers: headers,
  });
};

export const post = async (path, data = {}, useAuth = false) => {
  let headers = {};
  if (useAuth) {
    headers = getAuthHeaders();
  }

  return await api.post(path, data, {
    headers: headers,
  });
};

export const put = async (path, data = {}, useAuth = false) => {
  let headers = {};
  if (useAuth) {
    headers = getAuthHeaders();
  }

  return await api.put(path, data, {
    headers: headers,
  });
};

export const patch = async (path, data = {}, useAuth = false) => {
  let headers = {};
  if (useAuth) {
    headers = getAuthHeaders();
  }

  return await api.patch(path, data, {
    headers: headers,
  });
};
