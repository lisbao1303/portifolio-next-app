// src/services/userPublicDataService.ts
import { UserPublicData } from '../models/userPublicData';
import { apiClient } from './apiClient';


const SERVICE = "/user_public_data";

export const userPublicDataService = {


  async getAll(): Promise<UserPublicData[]> {
    return apiClient.get<UserPublicData[]>(SERVICE);
  },

  async getById(id: string): Promise<UserPublicData> {
    return apiClient.get<UserPublicData>(`${SERVICE}/${id}`);
  },

  async create(data: UserPublicData): Promise<UserPublicData> {
    return apiClient.post<UserPublicData, UserPublicData>(SERVICE, data);
  },

  async update(id: string, data: UserPublicData): Promise<UserPublicData> {
    return apiClient.put<UserPublicData, UserPublicData>(`${SERVICE}/${id}`, data);
  },

  async delete(id: string): Promise<void> {
    return apiClient.delete<void>(`${SERVICE}/${id}`);
  },
};
