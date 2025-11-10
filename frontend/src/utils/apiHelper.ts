const API = import.meta.env.VITE_API;

export const makeRequest = async (url: string, options: any = {}) => {
  try {
    const token = sessionStorage.getItem("authToken");

    const headers: any = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API}${url}`, {
      ...options,
      credentials: "include",
      headers,
    });

    if (response.status === 401) {
      sessionStorage.removeItem("authToken");
    }

    return response;
  } catch (error) {
    console.error("Request error:", error);
    throw error;
  }
};
