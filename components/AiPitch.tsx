import React, { useState, useEffect } from 'react';
import { RefreshCw, MessageSquareQuote } from 'lucide-react';
import { generateTeamPitch } from '../services/geminiService';
import { PitchStatus } from '../types';

interface AiPitchProps {
  selectedProject: string | null;
}

export const AiPitch: React.FC<AiPitchProps> = ({ selectedProject }) => {
  const [pitch, setPitch] = useState<string>("");
  const [status, setStatus] = useState<PitchStatus>(PitchStatus.IDLE);

  useEffect(() => {
    if (selectedProject) {
      handleGeneratePitch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProject]);

  const handleGeneratePitch = async () => {
    if (!selectedProject) return;

    setStatus(PitchStatus.LOADING);
    setPitch("");
    
    try {
      const result = await generateTeamPitch(selectedProject);
      setPitch(result);
      setStatus(PitchStatus.SUCCESS);
    } catch (error) {
      console.error(error);
      setPitch("שגיאה ביצירת תוכן.");
      setStatus(PitchStatus.ERROR);
    }
  };

  if (!selectedProject) {
    return null;
  }

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 p-1 mt-8">
      <div className="bg-white rounded-[10px] p-6 h-full relative z-10">
        <div className="flex justify-between items-center mb-4">
           <h3 className="font-bold text-gray-800 flex items-center">
             <MessageSquareQuote className="ml-2 text-indigo-600" />
             הפיץ' שלנו ל{selectedProject}
           </h3>
           
           {status === PitchStatus.SUCCESS && (
             <button 
               onClick={handleGeneratePitch}
               className="text-xs text-gray-500 hover:text-indigo-600 flex items-center transition-colors"
             >
               <RefreshCw className="w-3 h-3 ml-1" />
               נסח מחדש
             </button>
           )}
        </div>

        <div className="min-h-[100px] flex items-center justify-center">
          {status === PitchStatus.LOADING ? (
            <div className="flex flex-col items-center animate-pulse">
              <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-2"></div>
              <span className="text-sm text-gray-400">ה-AI מנתח את ההתאמה...</span>
            </div>
          ) : (
            <div className="text-lg leading-relaxed text-gray-700 font-medium">
               "{pitch}"
            </div>
          )}
        </div>
      </div>
      
      {/* Decorative gradient blur behind */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500 blur-[50px] opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-500 blur-[50px] opacity-40 animate-pulse"></div>
    </div>
  );
};