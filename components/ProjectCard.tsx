import React from 'react';
import { Project } from '../types';
import { ArrowLeft } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:border-blue-200 transition-all group h-full flex flex-col">
      <div className="h-32 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img 
          src={project.imageUrl} 
          alt={project.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute bottom-3 right-3 z-20 text-white font-bold text-lg">
          {project.name}
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
           <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded-sm">
            {project.category}
          </span>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="mt-4 flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-[-5px] transition-transform">
          נשמח לעבוד יחד
          <ArrowLeft className="w-4 h-4 mr-1" />
        </div>
      </div>
    </div>
  );
};