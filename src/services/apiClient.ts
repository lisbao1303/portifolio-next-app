const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

if (!BASE_URL) {
  throw new Error('NEXT_PUBLIC_API_URL is not defined in the environment variables');
}

if (!API_KEY) {
  throw new Error('NEXT_PUBLIC_API_KEY is not defined in the environment variables');
}

export const apiClient = {
  async get<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        ...(options?.headers || {}),
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`GET ${url} failed with status ${response.status}`);
    }
    return response.json();
  },

  async post<T, U>(url: string, body: U, options?: RequestInit): Promise<T> {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        ...(options?.headers || {}),
      },
      body: JSON.stringify(body),
      ...options,
    });

    if (!response.ok) {
      throw new Error(`POST ${url} failed with status ${response.status}`);
    }
    return response.json();
  },

  async put<T, U>(url: string, body: U, options?: RequestInit): Promise<T> {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        ...(options?.headers || {}),
      },
      body: JSON.stringify(body),
      ...options,
    });

    if (!response.ok) {
      throw new Error(`PUT ${url} failed with status ${response.status}`);
    }
    return response.json();
  },

  async delete<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        ...(options?.headers || {}),
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`DELETE ${url} failed with status ${response.status}`);
    }
    return response.json();
  },
};
