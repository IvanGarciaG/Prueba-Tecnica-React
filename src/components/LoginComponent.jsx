import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth.js";

/**
 * 
 *
 * Renders the login form according to the provided sketch.
 * Uses react-hook-form for validation and useAuth hook for API calls.
 * Shows an error message below the form if credentials are invalid.
 */
export default function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { login } = useAuth();
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async ({ username, password }) => {
    setErrorMsg("");
    try {
      await login({ username, password });
      window.location.href = "/profile";
    } catch (e) {
      setErrorMsg(e.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1F2226] p-4">
      <div className="w-full max-w-md bg-[#1F2226]/80 backdrop-blur-lg rounded-xl shadow-xl p-8">
        <h2 className="text-3xl font-semibold text-white text-center mb-6">
          Iniciar Sesión
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <input
              {...register("username", { required: true })}
              type="text"
              placeholder="Usuario"
              className="
                w-full px-4 py-3 bg-gray-800 text-gray-200
                placeholder-gray-500 rounded-md
                focus:outline-none focus:ring-2 focus:ring-[#EA4D88]
                transition
              "
            />
            {errors.username && (
              <p className="text-red-400 text-sm mt-1">
                Usuario es obligatorio
              </p>
            )}
          </div>

          <div>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Contraseña"
              className="
                w-full px-4 py-3 bg-gray-800 text-gray-200
                placeholder-gray-500 rounded-md
                focus:outline-none focus:ring-2 focus:ring-[#EA4D88]
                transition
              "
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                Contraseña es obligatoria
              </p>
            )}
          </div>

          <button
            type="submit"
            className="
              w-full py-3 text-white text-lg uppercase rounded-md
              border-2 border-[#EA4D88]
              shadow-[0_0_10px_#EA4D88,0_0_20px_#EA4D88]
              hover:bg-[#EA4D88] transition
            "
          >
            Autenticar
          </button>

          {errorMsg && (
            <p className="text-center text-red-400 mt-2">{errorMsg}</p>
          )}
        </form>
      </div>
    </div>
  );
}
