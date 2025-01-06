// src/services/educationService.ts
import { Education } from '../models/education';
import { apiClient } from './apiClient';

export const educationService = {
  async getAll(): Promise<Education[]> {
    return apiClient.get<Education[]>('/educations');
  },

  async getById(id: string): Promise<Education> {
    return apiClient.get<Education>(`/educations/${id}`);
  },

  async create(data: Education): Promise<Education> {
    return apiClient.post<Education, Education>('/educations', data);
  },

  async update(id: string, data: Education): Promise<Education> {
    return apiClient.put<Education, Education>(`/educations/${id}`, data);
  },

  async delete(id: string): Promise<void> {
    return apiClient.delete<void>(`/educations/${id}`);
  },
};
