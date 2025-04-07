
import React from 'react';

const DashboardHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-15 bg-whatsapp-primary z-10">
      <div className="h-full flex items-center justify-between px-6">
        <h1 className="text-white font-bold text-xl">WhatsApp AI Assistant Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <button className="text-white hover:text-slate-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </button>
          <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center text-whatsapp-primary font-semibold">
            A
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
