
import React from 'react';
import { MapPin, CalendarDays, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  if (!job) return null; // early return if job is not provided

  const {
    title = 'No Title',
    _id,
    requirements = [],
    location = 'Not specified',
    applicationDeadline = 'N/A',
    salaryRange = { min: 0, max: 0 },
    company_logo,
    company = 'Unknown Company',
    jobType = 'N/A',
    description = 'No description available.',
  } = job;

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-5 hover:shadow-xl transition-all duration-300">
      {/* Company Info */}
      <div className="flex items-center gap-4">
        <img
          src={company_logo || 'https://via.placeholder.com/56'}
          alt={company}
          className="w-14 h-14 rounded-lg object-cover"
        />
        <div>
          <h3 className="text-lg text-black font-semibold">{company}</h3>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
        </div>
      </div>

      {/* Job Title & Meta */}
      <div className="mt-4">
        <h2 className="text-xl font-bold text-blue-600">{title}</h2>
        <div className="flex flex-wrap gap-3 text-sm text-gray-600 mt-2">
          <span className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" /> {jobType}
          </span>
          <span className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4" /> Deadline: {applicationDeadline}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 mt-3">
        {description.length > 120 ? `${description.slice(0, 120)}...` : description}
      </p>

      {/* Requirements */}
      <div className="flex flex-wrap gap-2 mt-4">
        {requirements.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">
        <div>
          <p className="text-sm text-gray-500">Salary Range</p>
          <p className="text-lg font-bold text-green-600">
            ৳{salaryRange.min?.toLocaleString() || 0} - ৳{salaryRange.max?.toLocaleString() || 0}
          </p>
        </div>
        <Link
          to={`/jobs/${_id}`}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;


/**
 * {
    "_id": "6836f3c13fb84393237ee977",
    "title": "Software Engineer",
    "location": "Halishohor, Chittagong",
    "jobType": "Hybrid",
    "category": "Engineering",
    "applicationDeadline": "2024-12-31",
    "salaryRange": {
      "min": 40000,
      "max": 60000,
      "currency": "bdt"
    },
    "description": "We are seeking a skilled Software Engineer to join our dynamic team. The candidate will work on diverse projects and contribute to innovative solutions.",
    "company": "Favorite IT",
    "requirements": [
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB"
    ],
    "responsibilities": [
      "Develop and maintain software",
      "Collaborate with the team",
      "Participate in code reviews"
    ],
    "status": "active",
    "hr_email": "hr@techsolutions.com",
    "hr_name": "Farhan Rahman",
    "company_logo": "https://i.ibb.co/mXD5MNf/facebook.png"
  },
 */