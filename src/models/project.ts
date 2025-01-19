export interface Project {
    id?: string; // Representa o ID no MongoDB
    name: string;
    description: string;
    technologies: string[];
    dateStart: string; // LocalDate será representado como string (formato ISO 8601)
    dateEnd: string;
    linkRepository: string;
    linkDemo: string;
    additionalInfo: string;
  }
  