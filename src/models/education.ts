export interface Education {
    id?: string;
    title: string;
    institute: string;
    type: string;
    description: string;
    technologies: string[];
    dateStart: string; // ISO Date
    dateEnd: string; // ISO Date
    academic: AcademicAds[];
    additionalInfo: string;
  }
  
  interface AcademicAds {
    title: string;
    type: string;
    description: string;
    dataInicio: string; 
    dataFim: string;    
}