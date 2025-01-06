// src/services/userPublicDataService.ts
import { UserPublicData } from '../models/userPublicData';
import { apiClient } from './apiClient';

export const userPublicDataService = {
  async getAll(): Promise<UserPublicData[]> {
    return apiClient.get<UserPublicData[]>('/userpublicdata');
  },

  async getById(id: string): Promise<UserPublicData> {
    return apiClient.get<UserPublicData>(`/userpublicdata/${id}`);
  },

  async create(data: UserPublicData): Promise<UserPublicData> {
    return apiClient.post<UserPublicData, UserPublicData>('/userpublicdata', data);
  },

  async update(id: string, data: UserPublicData): Promise<UserPublicData> {
    return apiClient.put<UserPublicData, UserPublicData>(`/userpublicdata/${id}`, data);
  },

  async delete(id: string): Promise<void> {
    return apiClient.delete<void>(`/userpublicdata/${id}`);
  },
};
