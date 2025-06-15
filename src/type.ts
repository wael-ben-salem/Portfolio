export interface ProjectDetails {
  presentation: string;
  functionalities: string[];
  architecture?: string[];
  technologies?: string[];
  video?: string;
  screenshots?: string[];
}

export interface Project {
  logo: string;
  title: string;
  company: string;
  date: string;
  description: string;
  details?: ProjectDetails;
}
