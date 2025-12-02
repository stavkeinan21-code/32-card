import React, { useState } from 'react';
import { Member } from '../types';
import { getIcon } from '../constants';

interface MemberCardProps {
  member: Member;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 flex flex-col items-center text-center group relative overflow-hidden h-full">
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full mb-5 relative group-hover:scale-105 transition-transform duration-300 shadow-md bg-gray-50 flex items-center justify-center border-4 border-white">
        {member.imageUrl && !imgError ? (
          <img 
            src={member.imageUrl} 
            alt={member.name}
            className="w-full h-full object-cover object-top rounded-full"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="text-gray-400">
            {getIcon(member.iconType, 40)}
          </div>
        )}
        
        {/* Small badge icon */}
        <div className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-md border border-gray-100">
           {getIcon(member.iconType, 16)}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
      <div className="text-sm font-semibold text-blue-600 mb-3 bg-blue-50 px-3 py-1 rounded-full inline-block">
        {member.role}
      </div>
      
      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow px-2">
        {member.description}
      </p>
      
      <div className="flex flex-wrap gap-2 justify-center mt-auto w-full pt-4 border-t border-gray-50">
        {member.skills.map((skill, idx) => (
          <span key={idx} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md border border-gray-100">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};