import React, { useState } from 'react';
import { Users, Briefcase, Star, Sparkles, Target, Heart, Zap } from 'lucide-react';
import { MemberCard } from './components/MemberCard';
import { ProjectCard } from './components/ProjectCard';
import { AiPitch } from './components/AiPitch';
import { TEAM_MEMBERS, PROJECTS, GROUP_VISION, GROUP_CAPABILITIES } from './constants';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <header className="bg-gradient-to-l from-blue-900 via-blue-800 to-slate-900 text-white pt-16 pb-24 px-6 rounded-b-[3rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute right-10 top-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
             <div className="absolute left-10 bottom-10 w-48 h-48 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-white/20">
            <Users className="w-4 h-4 ml-2" />
            המחלקה לניהול
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
            קבוצה 32
          </h1>
          
          <div className="mt-8 flex justify-center gap-3 flex-wrap max-w-2xl mx-auto">
             <span className="bg-white/10 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-white/10">ניהול</span>
             <span className="bg-white/10 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-white/10">חדשנות</span>
             <span className="bg-white/10 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-white/10">יזמות</span>
             <span className="bg-white/10 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-white/10">מימון</span>
             <span className="bg-white/10 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-white/10">שיווק</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 -mt-16 space-y-16 relative z-20">
        
        {/* Vision Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-600">
           <div className="text-center">
             <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center">
               <Target className="ml-2 text-blue-600 w-6 h-6" />
               החזון שלנו
             </h2>
             <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed max-w-4xl mx-auto italic">
               "{GROUP_VISION}"
             </p>
           </div>
        </section>

        {/* Group Capabilities Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Zap className="ml-2 text-yellow-500" />
             יכולות קבוצתיות
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {GROUP_CAPABILITIES.map((cap, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start">
                 <div className="mt-1 ml-3 bg-blue-50 p-1.5 rounded-full">
                    <Heart className="w-4 h-4 text-blue-600" />
                 </div>
                 <span className="text-gray-700 font-medium">{cap}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Team Members Grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Users className="ml-2 text-blue-600" />
            חברי הנבחרת
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </section>

        {/* AI Pitch Section - Interactive */}
        <section className="bg-white rounded-2xl p-8 shadow-lg border border-indigo-50">
           <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <Sparkles className="ml-2 text-purple-600" />
                  למה לבחור בנו?
                </h2>
                <p className="text-gray-500 mt-2">
                  בחרו את הפרויקט שלכם ותנו ל-AI להסביר למה אנחנו ההתאמה המושלמת.
                </p>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PROJECTS.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project.name)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 text-right ${
                    selectedProject === project.name
                      ? 'border-purple-600 bg-purple-50 shadow-md ring-2 ring-purple-200'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-bold text-gray-800">{project.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{project.category}</div>
                </button>
              ))}
           </div>

           <AiPitch selectedProject={selectedProject} />
        </section>

        {/* Projects Section */}
        <section>
           <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Star className="ml-2 text-yellow-500" />
            פרויקטים מועדפים
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

      </main>
      
      <footer className="mt-24 text-center text-gray-400 text-sm pb-8">
        <p>© 2024 קבוצה 32 | המחלקה לניהול</p>
      </footer>
    </div>
  );
};

export default App;