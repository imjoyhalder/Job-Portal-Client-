import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaDollarSign, FaEnvelope, FaUserTie } from "react-icons/fa";

const CreateJobForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 py-10 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* animated blurred background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-black to-indigo-900 opacity-20 animate-pulse blur-lg z-0"></div>

      <div className="w-full max-w-4xl p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg space-y-6 relative z-10">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Post a New Job</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          {/* Job Title */}
          <div>
            <label className="label"><span className="label-text text-white">Job Title</span></label>
            <div className="flex items-center bg-white/10 rounded-lg p-2">
              <FaBriefcase className="text-white mr-2" />
              <input type="text" name="title" placeholder="Software Engineer" className="bg-transparent w-full outline-none" required />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="label"><span className="label-text text-white">Location</span></label>
            <div className="flex items-center bg-white/10 rounded-lg p-2">
              <FaMapMarkerAlt className="text-white mr-2" />
              <input type="text" name="location" placeholder="Chittagong, Bangladesh" className="bg-transparent w-full outline-none" required />
            </div>
          </div>

          {/* Job Type */}
          <div>
            <label className="label"><span className="label-text text-white">Job Type</span></label>
            <select name="jobType" className="select w-full bg-white/10 text-white">
              <option>Remote</option>
              <option>Hybrid</option>
              <option>On-site</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="label"><span className="label-text text-white">Category</span></label>
            <input type="text" name="category" placeholder="Engineering" className="input w-full bg-white/10 text-white" />
          </div>

          {/* Deadline */}
          <div>
            <label className="label"><span className="label-text text-white">Application Deadline</span></label>
            <div className="flex items-center bg-white/10 rounded-lg p-2">
              <FaCalendarAlt className="text-white mr-2" />
              <input type="date" name="applicationDeadline" className="bg-transparent w-full outline-none" required />
            </div>
          </div>

          {/* Salary */}
          <div>
            <label className="label"><span className="label-text text-white">Salary (Min - Max)</span></label>
            <div className="flex gap-2">
              <input type="number" name="salaryMin" placeholder="Min" className="input w-full bg-white/10 text-white" />
              <input type="number" name="salaryMax" placeholder="Max" className="input w-full bg-white/10 text-white" />
            </div>
          </div>

          {/* Company Name */}
          <div>
            <label className="label"><span className="label-text text-white">Company Name</span></label>
            <div className="flex items-center bg-white/10 rounded-lg p-2">
              <FaUserTie className="text-white mr-2" />
              <input type="text" name="company" placeholder="Favorite IT" className="bg-transparent w-full outline-none" required />
            </div>
          </div>

          {/* Company Logo URL */}
          <div>
            <label className="label"><span className="label-text text-white">Company Logo URL</span></label>
            <input type="text" name="company_logo" placeholder="https://logo.com/image.png" className="input w-full bg-white/10 text-white" />
          </div>

          {/* HR Email */}
          <div>
            <label className="label"><span className="label-text text-white">HR Email</span></label>
            <div className="flex items-center bg-white/10 rounded-lg p-2">
              <FaEnvelope className="text-white mr-2" />
              <input type="email" name="hr_email" placeholder="hr@example.com" className="bg-transparent w-full outline-none" required />
            </div>
          </div>

          {/* HR Name */}
          <div>
            <label className="label"><span className="label-text text-white">HR Name</span></label>
            <input type="text" name="hr_name" placeholder="Farhan Rahman" className="input w-full bg-white/10 text-white" />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="label"><span className="label-text text-white">Job Description</span></label>
            <textarea name="description" rows="4" placeholder="Write a short description..." className="textarea w-full bg-white/10 text-white" required />
          </div>

          {/* Requirements */}
          <div className="md:col-span-2">
            <label className="label"><span className="label-text text-white">Requirements (comma separated)</span></label>
            <input type="text" name="requirements" placeholder="JavaScript, React, Node.js" className="input w-full bg-white/10 text-white" />
          </div>

          {/* Responsibilities */}
          <div className="md:col-span-2">
            <label className="label"><span className="label-text text-white">Responsibilities (comma separated)</span></label>
            <input type="text" name="responsibilities" placeholder="Maintain software, Code reviews" className="input w-full bg-white/10 text-white" />
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <button type="submit" className="btn btn-primary text-white px-6 py-2 rounded-lg shadow-lg">
              Post Job
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default CreateJobForm;
