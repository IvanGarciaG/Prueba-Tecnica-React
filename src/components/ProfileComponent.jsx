import React, { useState, useEffect } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../hooks/useAuth.js";

/**
 * ProfileComponent
 *
 * Shows the authenticated user's profile card matching the sketch.
 * Restores session from localStorage, redirects to /login if none.
 * Displays avatar, name, email, location, stats and address.
 * Includes a "Log Out" button that clears session and returns to login.
 */
export default function ProfileComponent() {
  const { logout } = useAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("auth");
    if (stored) {
      setUser(JSON.parse(stored));
    } else {
      window.location.href = "/login";
    }
    setLoading(false);
  }, []);

  if (loading) return null;
  if (!user) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1F2226] p-4">
      <div className="relative bg-white rounded-xl shadow-xl max-w-xl w-full p-6">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <img
            src={user.image}
            alt="Avatar"
            className="
              w-24 h-24 rounded-full border-4 border-[#EA4D88]
              shadow-lg shadow-[#EA4D88]/50
            "
          />
        </div>

        <div className="mt-16 text-center">
          <h1 className="text-2xl font-bold text-[#EA4D88] mb-1">
            {user.firstName} {user.lastName}
          </h1>
          <p className="text-gray-600 mb-2">{user.email}</p>
          <div className="flex items-center justify-center text-gray-600 mb-4">
            <MapPinIcon className="w-5 h-5 mr-1" />
            <span>
              {user.address.city} — {user.address.state}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 text-center text-gray-700 font-medium mb-6">
          <div>
            <p className="text-xl">{user.birthDate.substring(0, 10)}</p>
            <p className="text-sm text-gray-500">Cumpleaños</p>
          </div>
          <div>
            <p className="text-xl">{user.age}</p>
            <p className="text-sm text-gray-500">Edad</p>
          </div>
          <div>
            <p className="text-xl">{user.phone}</p>
            <p className="text-sm text-gray-500">Teléfono</p>
          </div>
        </div>

        <ul className="space-y-2 text-gray-600 pl-4">
          <li>Dirección: {user.address.address}</li>
          <li>Ciudad: {user.address.city}</li>
          <li>Código Postal: {user.address.postalCode}</li>
        </ul>

        <div className="mt-6 text-center">
          <button
            onClick={() => {
              logout();
              window.location.href = "/login";
            }}
            className="
              px-4 py-2 bg-red-500 text-white rounded-md
              hover:bg-red-600 transition
            "
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}
