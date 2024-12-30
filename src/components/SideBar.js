import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

const Sidebar = () => {
  const categories = [
    'IT & Development',
    'Telecommunications',
    'Hotels & Tourism',
    'Education',
    'Financial Services'
  ];

  const jobTypes = [
    'Full Time',
    'Part Time',
    'Freelance',
    'Remote',
    'Temporary'
  ];

  const experienceLevels = [
    'No experience',
    'Fresher',
    'Intermediate',
    'Expert'
  ];

  const datePosted = [
    'All',
    'Last Hour',
    'Last 24 Hours',
    'Last 7 Days',
    'Last 30 Days'
  ];

  const tags = ['programming', 'design', 'sales', 'marketing', 'management', 'communication'];

  return (
    <div className="w-full lg:w-72 bg-gray-50 p-4 rounded-lg">
      {/* Search */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Search by Job Title</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Job title or keyword"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Location */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Location</h3>
        <div className="relative">
          <select className="w-full px-3 py-2 border border-gray-200 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select location</option>
            <option>New York, USA</option>
            <option>London, UK</option>
            <option>Berlin, DE</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        </div>
      </div>

      {/* Category */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Category</h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <label key={index} className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
              <span className="ml-2 text-sm text-gray-600">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Job Type */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Job Type</h3>
        <div className="space-y-2">
          {jobTypes.map((type, index) => (
            <label key={index} className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
              <span className="ml-2 text-sm text-gray-600">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Experience Level */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Experience Level</h3>
        <div className="space-y-2">
          {experienceLevels.map((level, index) => (
            <label key={index} className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
              <span className="ml-2 text-sm text-gray-600">{level}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Date Posted */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Date Posted</h3>
        <div className="space-y-2">
          {datePosted.map((date, index) => (
            <label key={index} className="flex items-center">
              <input type="radio" name="date" className="form-radio h-4 w-4 text-blue-600" />
              <span className="ml-2 text-sm text-gray-600">{date}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Salary Range */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Salary</h3>
        <div className="px-2">
          <input
            type="range"
            min="0"
            max="100000"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-600">$0</span>
            <span className="text-sm text-gray-600">$100K</span>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hiring Banner */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
        <h3 className="text-lg font-bold mb-2">WE ARE HIRING</h3>
        <p className="text-sm mb-4">Apply Today!</p>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md text-sm font-medium">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

