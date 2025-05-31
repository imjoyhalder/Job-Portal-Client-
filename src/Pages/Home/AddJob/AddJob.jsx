import React from 'react';

const AddJob = () => {

    const handleAddJob = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
        const { min, max, currency, ...newJob } = initialData
        newJob.salaryRange = { max, min, currency }
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')

        fetch('', {})
            .then(res=> res.json())
            .then(data=>{
                console.log()
            })

    }
    return (
        <div>
            <h2 className='text-3xl'>Post a new Job</h2>
            <form onSubmit={handleAddJob} className="card-body">
                {/* job title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name='jobTitle' placeholder="Job Title" className="input input-bordered" required />
                </div>
                {/* Job location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type="text" placeholder="Job Location" className="input input-bordered" required />
                </div>
                {/* Job Type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Pick a Job Field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Teaching</option>
                    </select>
                </div>
                {/* Salary Range */}
                <p className='my-2'>Salary Range</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-center'>
                    <div className="form-control">
                        <input type="text" name='min' placeholder="Min" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name='max' placeholder="Max" className="input input-bordered" required />
                    </div>
                    {/* Currency */}
                    <div className="form-control">
                        <select name='currency' className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                        </select>
                    </div>
                </div>
                {/* Job description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea name='description' className="textarea textarea-bordered" placeholder="Job Description" required></textarea>
                </div>
                {/* Company Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" name='company' placeholder="Company Name" className="input input-bordered" required />
                </div>

                {/* job requirements */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requirements</span>
                    </label>
                    <input type="text" name='requirements' placeholder="Put Each Requirements into new line" className="input input-bordered" required />
                </div>
                {/* Responsibilities */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Responsibilities</span>
                    </label>
                    <input type="text" name='responsibilities' placeholder="Write Each Responsibilities into new line " className="input input-bordered" required />
                </div>
                {/* HR name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input type="text" name='hr_name' placeholder="HR Name" className="input input-bordered" required />
                </div>
                {/* HR email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type="text" name='hr_email' placeholder="HR Email" className="input input-bordered" required />
                </div>
                {/* Company logo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Logo URL</span>
                    </label>
                    <input type="text" name='company_logo' placeholder="Company Logo URL" className="input input-bordered" required />
                </div>

                {/* submit button */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;