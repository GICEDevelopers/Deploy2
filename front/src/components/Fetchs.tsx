import { ILoginResponse, IUserLogin, IUserRegister } from '@/interfaces/interfaces'; 

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchRegisterUser = async (user: IUserRegister) => {
  console.log('Datos del usuario a enviar:', user);

  const response = await fetch(`${API_URL}/users`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error desconocido');
  }

  const data = await response.json();
  return data;
};

export const fetchLoginUser = async (credentials: IUserLogin): Promise<ILoginResponse> => {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Error en la autenticación');
    }

    const data: ILoginResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error en la función login:', error);
    throw error;
  }
};
