import React from 'react';
import { useParams } from 'react-router-dom';
import { Download } from 'lucide-react';

const CVPage = () => {
  const { id } = useParams();

  // Team Data - Same as before
  const teamMembers = [
    { id: "farhan", name: "Farhan Faqir", cvImg: "/Farhan-CV.png" },
    { id: "burhan", name: "Burhan Alam", cvImg: "/Burhan-CV.png" },
    { id: "izhar", name: "Izhar", cvImg: "/IzharCv.png" },
    { id: "alina-alam", name: "Alina Alam", cvImg: "/AlinaAlam-CV.png" },
    { id: "diya", name: "Diya Noor", cvImg: "/Diya-CV.png" },
    { id: "alina-ali", name: "Alina Ali", cvImg: "/AlinaAli-CV.png" },
  ];

  const member = teamMembers.find(m => m.id === id);

  if (!member) return <div className="text-white text-center mt-20">Member not found</div>;

  return (
    <div className="bg-[#0b1120] min-h-screen font-sans animate-fadeIn">
      
      {/* TOP BAR - Simple header without button now */}
      <div className="sticky top-0 z-50 bg-[#0b1120] border-b border-white/10 py-4 md:py-5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-start items-center w-full">
           <h2 className="text-white font-bold md:text-xl text-base uppercase tracking-wider">
            {member.name} <span className="text-[#f27c22] ml-2">| Professional CV</span>
          </h2>
        </div>
      </div>

      {/* CV CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col items-center">
        
        {/* CV Image Container */}
        <div className="w-full lg:w-[850px] bg-white shadow-2xl rounded-sm overflow-hidden p-2 md:p-5 border border-white/5">
          <img 
            src={member.cvImg} 
            alt={`${member.name} CV`} 
            className="w-full h-auto object-contain"
          />
        </div>

        {/* DOWNLOAD BUTTON - Now at the end and centered */}
        <div className="mt-12 mb-20 flex justify-center w-full">
          <a 
            href={member.cvImg} 
            download={`${member.name}-CV.png`}
            className="bg-[#f27c22] hover:bg-[#d96a1b] text-white px-10 py-4 rounded-sm font-bold flex items-center gap-3 transition-all transform active:scale-95 shadow-xl shadow-[#f27c22]/20 text-lg uppercase tracking-widest"
          >
            <Download size={24} strokeWidth={3} /> Download CV
          </a>
        </div>

      </div>
    </div>
  );
};

export default CVPage;