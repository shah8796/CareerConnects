import React from 'react';
import JobCard from './JobCard';
import { ChevronDown } from 'lucide-react';

const JobList = () => {
  const jobs = [
    {
      id: 1,
      title: 'Forward Security Director',
      company: 'Bench, Schlauer and Schultz Co',
      type: 'Full-time',
      salary: '$30000-$40000',
      location: 'New York, USA',
      postedTime: '2 days ago',
      companyLogo: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Regional Creative Facilitator',
      company: 'Amazon',
      type: 'Part-time',
      salary: '$20000-$30000',
      location: 'Los Angeles, USA',
      postedTime: '3 days ago',
      companyLogo: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Internal Integration Planner',
      company: 'Meta',
      type: 'Full-time',
      salary: '$40000-$50000',
      location: 'Texas, USA',
      postedTime: '1 week ago',
      companyLogo: '/placeholder.svg'
    },
    // Add more job listings as needed
  ];

  return (
    <div className="flex-1 max-w-3xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">Showing 5-10 of 50 results</p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md">
            Latest
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Job Cards */}
      <div className="space-y-4">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-blue-600 text-white">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200">
          2
        </button>
        <button className="px-3 h-8 flex items-center justify-center rounded-md border border-gray-200">
          Next →
        </button>
      </div>
    </div>
  );
};

export default JobList;

