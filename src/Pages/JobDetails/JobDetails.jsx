import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { MapPin, CalendarDays, Briefcase, Mail, User } from 'lucide-react';
import { motion } from 'framer-motion';

const JobDetails = () => {
    const job = useLoaderData();
    const {
        title,
        location,
        jobType,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        responsibilities,
        hr_email,
        hr_name,
        company_logo,
        category,
        _id,
    } = job;

    return (
        <div className="min-h-screen bg-black py-10 px-4">
            <motion.div
                className="max-w-5xl mx-auto p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg space-y-6 border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Header */}
                <motion.div
                    className="flex items-start gap-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <img src={company_logo} alt={company} className="w-20 h-20 rounded-lg bg-white p-2" />
                    <div>
                        <h1 className="text-3xl font-bold text-white">{title}</h1>
                        <p className="text-lg text-gray-300">{company} - {category}</p>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-400">
                            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {location}</span>
                            <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {jobType}</span>
                            <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" /> Apply by: {applicationDeadline}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h2 className="text-xl font-semibold text-white mb-2">Job Description</h2>
                    <p className="text-gray-300 leading-relaxed">{description}</p>
                </motion.div>

                {/* Requirements */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h2 className="text-xl font-semibold text-white mb-2">Requirements</h2>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                        {requirements.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </motion.div>

                {/* Responsibilities */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="text-xl font-semibold text-white mb-2">Responsibilities</h2>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                        {responsibilities.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </motion.div>

                {/* Salary & HR */}
                <motion.div
                    className="grid sm:grid-cols-2 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="bg-white/10 border border-white/20 p-4 rounded-lg text-white">
                        <h3 className="text-lg font-semibold mb-2">Salary Range</h3>
                        <p className="text-green-400 font-bold text-xl">
                            ৳{salaryRange.min.toLocaleString()} - ৳{salaryRange.max.toLocaleString()}
                        </p>
                    </div>
                    <div className="bg-white/10 border border-white/20 p-4 rounded-lg text-white">
                        <h3 className="text-lg font-semibold mb-2">HR Contact</h3>
                        <p className="flex items-center gap-2 text-gray-300">
                            <User className="w-4 h-4" /> {hr_name}
                        </p>
                        <p className="flex items-center gap-2 text-gray-300">
                            <Mail className="w-4 h-4" /> {hr_email}
                        </p>
                    </div>
                </motion.div>

                {/* Button */}
                <motion.div
                    className="text-right"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <Link to={`/jobApply/:${_id}`}>
                        <button className="btn btn-primary px-6">Apply Now</button>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default JobDetails;
