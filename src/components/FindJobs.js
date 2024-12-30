import React from 'react';
import Sidebar from './SideBar';
import JobList from './JobList';

const FindJobs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <Sidebar />
          
          {/* Main Content */}
          <JobList />
        </div>
      </div>
    </div>
  );
};

export default FindJobs;

