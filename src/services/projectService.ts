import { Project } from '../models/project';
import { apiClient } from './apiClient';

export const projectService = {
  async getAll(): Promise<Project[]> {
    return apiClient.get<Project[]>('/projects');
  },

  async getById(id: string): Promise<Project> {
    return apiClient.get<Project>(`/projects/${id}`);
  },

  async create(data: Project): Promise<Project> {
    return apiClient.post<Project, Project>('/projects', data);
  },

  async update(id: string, data: Project): Promise<Project> {
    return apiClient.put<Project, Project>(`/projects/${id}`, data);
  },

  async delete(id: string): Promise<void> {
    return apiClient.delete<void>(`/projects/${id}`);
  },
};
