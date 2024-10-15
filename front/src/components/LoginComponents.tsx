"use client"; // Cambiar de "use·client" a 'use client'
import React, { useState } from 'react'; // Comillas simples ya están bien
import { fetchLoginUser } from './Fetchs'; // Comillas simples ya están bien

export default function LoginComponent() {
  const [dataUser, setDataUser] = useState({ email: "", password: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDataUser({ ...dataUser, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const credentials = { email: dataUser.email, password: dataUser.password };
    try {
      const success = await fetchLoginUser(credentials);

      if (success) {
        const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
        if (token) {
          alert(`Bienvenido`);
        }
      }
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      alert("Error durante el inicio de sesión. Por favor, intenta de nuevo.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700 text-white p-4">
      <div className="bg-gray-800 rounded-lg p-6 shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center mb-4">Formulario Iniciar sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1"></label>
            <input
              id="email"
              name="email"
              type="email"
              value={dataUser.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              required
              autoComplete="email"
              className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-1"></label>
            <input
              id="password"
              name="password"
              type="password"
              value={dataUser.password}
              onChange={handleChange}
              placeholder="********"
              required
              className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition duration-200"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
