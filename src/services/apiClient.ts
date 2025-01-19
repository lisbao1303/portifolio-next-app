const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!BASE_URL) {
  throw new Error('NEXT_PUBLIC_BASE_URL is not defined in the environment variables');
}

export const apiClient = {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(`${BASE_URL}${url}`);
    if (!response.ok) {
      throw new Error(`GET ${url} failed with status ${response.status}`);
    }
    return response.json();
  },

  async post<T, U>(url: string, body: U): Promise<T> {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`POST ${url} failed with status ${response.status}`);
    }
    return response.json();
  },

  async put<T, U>(url: string, body: U): Promise<T> {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`PUT ${url} failed with status ${response.status}`);
    }
    return response.json();
  },

  async delete<T>(url: string): Promise<T> {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`DELETE ${url} failed with status ${response.status}`);
    }
    return response.json();
  },
};
