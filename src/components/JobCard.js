import React from 'react';
import { Clock, MapPin, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-lg overflow-hidden">
            <img
              src={job.companyLogo}
              alt={job.company}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{job.company}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {job.type}
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" />
                {job.salary}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {job.location}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Link
            to={`/job/${job.id}`}
            className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Job Details
          </Link>
          <span className="text-sm text-gray-500">{job.postedTime}</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

