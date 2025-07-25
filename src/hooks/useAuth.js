

import { useState, useEffect } from "react";

/**
 * useAuth
 *
 * Custom hook to manage authentication state:
 *  - login(username, password): authenticates against DummyJSON API,
 *    fetches full user data, stores it in localStorage and state.
 *  - logout(): clears session from localStorage and state.
 *  - user: null or the full user object
 */
export function useAuth() {
  const [user, setUser] = useState(null);

  // On mount, try to restore session from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("auth");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  /**
   * login
   * @param {{ username: string, password: string }} creds
   * @returns {Promise<object>} 
   */
  async function login({ username, password }) {
    const authRes = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (!authRes.ok) {
      throw new Error("Credenciales inválidas");
    }
    const authData = await authRes.json();

    const profileRes = await fetch(
      `https://dummyjson.com/users/${authData.id}`,
      {
        headers: { Authorization: `Bearer ${authData.token}` },
      }
    );
    if (!profileRes.ok) {
      throw new Error("No se pudo cargar el perfil de usuario");
    }
    const profileData = await profileRes.json();

    const fullUser = { ...profileData, token: authData.token };

    localStorage.setItem("auth", JSON.stringify(fullUser));
    setUser(fullUser);

    return fullUser;
  }

  function logout() {
    localStorage.removeItem("auth");
    setUser(null);
  }

  return { user, login, logout };
}
