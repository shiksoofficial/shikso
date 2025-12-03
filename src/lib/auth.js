// Token storage utility functions

// Save token to localStorage
export const setToken = (token) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("authToken", token);
  }
};

// Get token from localStorage
export const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("authToken");
  }
  return null;
};

// Remove token from localStorage
export const removeToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("authToken");
  }
};

// Save user data to localStorage
export const setUser = (userData) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("userData", JSON.stringify(userData));
  }
};

// Get user data from localStorage
export const getUser = () => {
  if (typeof window !== "undefined") {
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : null;
  }
  return null;
};

// Remove user data from localStorage
export const removeUser = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("userData");
  }
};

// Clear all auth data (logout)
export const clearAuth = () => {
  removeToken();
  removeUser();
};

