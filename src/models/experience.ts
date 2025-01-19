export interface Experience {
    id?: string;
    company: string;
    position: string;
    location: string;
    description: string;
    technologies: string[];
    dateStart: string; // ISO Date
    dateEnd: string; // ISO Date
    additionalInfo: string;
  }
  