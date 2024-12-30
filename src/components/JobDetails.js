import React from 'react';
import { Building2, Clock, DollarSign, MapPin, Check } from 'lucide-react';

const JobDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm">
          {/* Job Header */}
          <div className="p-6 border-b">
            <div className="flex items-start gap-4">
              {/* Company Logo */}
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 via-green-500 to-red-500">
              </div>

              {/* Job Title and Company */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-2xl font-semibold mb-1">Corporate Solutions Executive</h1>
                    <p className="text-gray-600 mb-4">Leffler and Sons</p>
                  </div>
                  <span className="text-sm text-gray-500">10 min ago</span>
                </div>

                {/* Job Metadata */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Building2 className="h-4 w-4" />
                    Commerce
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Full time
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    $40000-$42000
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    New York, USA
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Job Content */}
          <div className="p-6 space-y-8">
            {/* Job Description */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Nunc sed a nisi purus. Nam dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat et. Felis eu ultricies a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nis enim fauget enim volutpat.
                </p>
                <p>
                  Et nunc ut tempus duis nisi sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque modo vitae. Quisque tincidunt metus lectus porta metus lectus porta eget blandit euismod sem nunc. Tortor gravida amet amet sapien mauris massa.Tortor varius nam maecenas duis blandit elit sit elit. Ante mauris morbi qam habitant ornare.
                </p>
              </div>
            </section>

            {/* Key Responsibilities */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Key Responsibilities</h2>
              <ul className="space-y-3">
                {[
                  "Et nunc ut tempus duis nisi sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue",
                  "Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in",
                  "Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing cursus fames",
                  "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque modo vitae. Quisque tincidunt metus lectus porta",
                  "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque modo vitae. Quisque tincidunt metus lectus porta",
                  "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque modo vitae. Quisque tincidunt metus lectus porta"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Professional Skills */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Professional Skills</h2>
              <ul className="space-y-3">
                {[
                  "Et nunc ut tempus duis nisi sed massa. Ornare varius faucibus nisi vitae vitae cras ornare",
                  "Ornare varius faucibus nisi vitae vitae cras ornare",
                  "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque modo vitae",
                  "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque modo vitae",
                  "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque modo vitae"
                ].map((skill, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

