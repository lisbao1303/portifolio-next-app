export interface Education {
    id?: string;
    title: string;
    institute: string;
    type: string;
    description: string;
    tecnologias: string[];
    dateStart: string; // ISO Date
    dateEnd: string; // ISO Date
    academic: string[];
    adicionalInfo: string;
  }
  