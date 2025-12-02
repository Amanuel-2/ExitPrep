import { createContext, useEffect, useMemo, useState } from "react";
import { getToken, setToken, clearToken } from "../utils/token";
import * as authApi from "../api/auth";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // bootstrap from token
  useEffect(() => {
    const token = getToken();
    if (!token) {
      // During local development, provide a mock authenticated user
      // so frontend routes can be explored before the backend exists.
      if (import.meta.env.DEV) {
        setUser({ id: "dev", name: "Demo User", email: "demo@example.com" });
        setLoading(false);
        return;
      }

      setLoading(false);
      return;
    }
    authApi
      .me()
      .then((u) => setUser(u))
      .catch(() => clearToken())
      .finally(() => setLoading(false));
  }, []);

  const login = async (email, password) => {
    const res = await authApi.login(email, password);
    setToken(res.token);
    setUser(res.user);
    return res;
  };

  const signup = async (payload) => {
    const res = await authApi.signup(payload);
    setToken(res.token);
    setUser(res.user);
    return res;
  };

  const logout = () => {
    clearToken();
    setUser(null);
  };

  const value = useMemo(
    () => ({ user, loading, isAuthenticated: !!user, login, signup, logout }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
