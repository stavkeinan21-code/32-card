
export interface Member {
  name: string;
  role: string;
  description: string;
  imageUrl?: string;
  iconType: 'presentation' | 'data' | 'design' | 'organize';
  skills: string[];
}

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
}

export enum PitchStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
