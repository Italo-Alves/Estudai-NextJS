// export const TOKEN_KEY = "f3dc0a1ffbd051f592ff5bb807a91a17";
export const isAuthenticated = () => localStorage.getItem("token") !== null;
export const getToken = () => localStorage.getItem("token") ?? null;
export const login = (token: string) => {
  localStorage.setItem("token", token);
};

export const logout = () => {
  localStorage.removeItem("token");
};
