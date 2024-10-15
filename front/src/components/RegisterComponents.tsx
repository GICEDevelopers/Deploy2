"use client";
import { IUserRegister } from '@/interfaces/interfaces';
import React, { useState } from 'react';
import { fetchRegisterUser } from './Fetchs';

export default function RegisterComponent() {
  const [userRegister, setUserRegister] = useState<IUserRegister>({
    email: '',
    password: '',
    phone: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    const updatedUser = {
      ...userRegister,
      [name]: value,
    };
    setUserRegister(updatedUser);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user: IUserRegister = {
      email: userRegister.email,
      password: userRegister.password,
      phone: userRegister.phone,
    };

    try {
      const isRegistered = await fetchRegisterUser(user);
      if (isRegistered) {
        alert('Registro exitoso');
      } else {
        alert('Error al registrarse');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido.';
      alert(errorMessage);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700 text-white p-4">
      <div className="bg-gray-800 rounded-lg p-6 shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center mb-4">Formulario de registro</h1>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1"></label>
            <input
              name="email"
              type="email"
              value={userRegister.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-1"></label>
            <input
              name="password"
              type="password"
              value={userRegister.password}
              onChange={handleChange}
              placeholder="Contraseña"
              required
              className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1"></label>
            <input
              name="phone"
              type="tel"
              value={userRegister.phone}
              onChange={handleChange}
              placeholder="Celular"
              required
              className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition duration-200"
          >
            Registrarme
          </button>
        </form>
      </div>
    </div>
  );
}
