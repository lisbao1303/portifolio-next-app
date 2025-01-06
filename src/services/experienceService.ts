// src/services/experienceService.ts
import { Experience } from '../models/experience';
import { apiClient } from './apiClient';

export const experienceService = {
  async getAll(): Promise<Experience[]> {
    return apiClient.get<Experience[]>('/experiences');
  },

  async getById(id: string): Promise<Experience> {
    return apiClient.get<Experience>(`/experiences/${id}`);
  },

  async create(data: Experience): Promise<Experience> {
    return apiClient.post<Experience, Experience>('/experiences', data);
  },

  async update(id: string, data: Experience): Promise<Experience> {
    return apiClient.put<Experience, Experience>(`/experiences/${id}`, data);
  },

  async delete(id: string): Promise<void> {
    return apiClient.delete<void>(`/experiences/${id}`);
  },
};
