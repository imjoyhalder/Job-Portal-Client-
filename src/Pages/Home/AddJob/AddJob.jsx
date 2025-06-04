import React from 'react';
import useAuth from '../../../Hooks/UseAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());

        const { min, max, currency, requirements, responsibilities, ...rest } = initialData;

        const newJob = {
            ...rest,
            salaryRange: { min, max, currency },
            requirements: requirements.split('\n'),
            responsibilities: responsibilities.split('\n')
        };

        fetch('http://localhost:3000/job-post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Job Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                navigate('/myPostedJobs');
            })
            .catch(err => console.error('Error posting job:', err));
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-base-100 rounded-xl shadow-md mt-10">
            <h2 className="text-3xl font-bold mb-6 text-primary">Post a New Job</h2>
            <form onSubmit={handleAddJob} className="space-y-6">

                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="label">Job Title</label>
                        <input name="title" type="text" placeholder="e.g. Software Engineer" className="input input-bordered w-full" required />
                    </div>
                    <div>
                        <label className="label">Job Location</label>
                        <input name="location" type="text" placeholder="e.g. Dhaka, Bangladesh" className="input input-bordered w-full" required />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="label">Job Category</label>
                        <select name="category" className="select select-bordered w-full" required>
                            <option disabled selected value="">Pick a Category</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                            <option>Teaching</option>
                        </select>
                    </div>
                    <div>
                        <label className="label">Company Name</label>
                        <input name="company" type="text" placeholder="Company Name" className="input input-bordered w-full" required />
                    </div>
                </div>

                {/* Job Type */}
                <div>
                    <label className="label">Job Type</label>
                    <select name="jobType" className="select select-bordered w-full" required>
                        <option disabled selected value="">Select Job Type</option>
                        <option>Onsite</option>
                        <option>Remote</option>
                        <option>Hybrid</option>
                    </select>
                </div>

                {/* Salary Range */}
                <div>
                    <label className="label">Salary Range</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input name="min" type="number" placeholder="Min" className="input input-bordered w-full" required />
                        <input name="max" type="number" placeholder="Max" className="input input-bordered w-full" required />
                        <select name="currency" className="select select-bordered w-full" required>
                            <option disabled selected value="">Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                        </select>
                    </div>
                </div>

                {/* Job Description */}
                <div>
                    <label className="label">Job Description</label>
                    <textarea name="description" className="textarea textarea-bordered w-full" placeholder="Job details..." required />
                </div>

                {/* Job Requirements */}
                <div>
                    <label className="label">Job Requirements <span className="text-sm text-gray-500">(one per line)</span></label>
                    <textarea name="requirements" className="textarea textarea-bordered w-full" placeholder="Enter each requirement on a new line" required />
                </div>

                {/* Job Responsibilities */}
                <div>
                    <label className="label">Job Responsibilities <span className="text-sm text-gray-500">(one per line)</span></label>
                    <textarea name="responsibilities" className="textarea textarea-bordered w-full" placeholder="Enter each responsibility on a new line" required />
                </div>

                {/* HR Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="label">HR Name</label>
                        <input name="hr_name" type="text" className="input input-bordered w-full" required />
                    </div>
                    <div>
                        <label className="label">HR Email</label>
                        <input name="hr_email" type="email" defaultValue={user?.email} className="input input-bordered w-full" required />
                    </div>
                </div>

                {/* Application Deadline */}
                <div>
                    <label className="label">Deadline</label>
                    <input name="applicationDeadline" type="date" className="input input-bordered w-full" required />
                </div>

                {/* Company Logo */}
                <div>
                    <label className="label">Company Logo URL</label>
                    <input name="company_logo" type="text" className="input input-bordered w-full" placeholder="https://..." required />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <button type="submit" className="btn btn-primary w-full">Post Job</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;
