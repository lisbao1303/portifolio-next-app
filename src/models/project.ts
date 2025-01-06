export interface Project {
    id?: string; // Representa o ID no MongoDB
    name: string;
    description: string;
    tecnologies: string[];
    dateStart: string; // LocalDate será representado como string (formato ISO 8601)
    dateEnd: string;
    link_repository: string;
    link_demo: string;
    adicionalInfo: string;
  }
  