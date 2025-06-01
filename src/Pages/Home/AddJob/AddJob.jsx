// import React from 'react';

// const AddJob = () => {

//     const handleAddJob = e => {
//         e.preventDefault()
//         const formData = new FormData(e.target)
//         const initialData = Object.fromEntries(formData.entries())
//         const { min, max, currency, ...newJob } = initialData
//         newJob.salaryRange = { max, min, currency }
//         newJob.requirements = newJob.requirements.split('\n')
//         newJob.responsibilities = newJob.responsibilities.split('\n')

//         fetch('', {})
//             .then(res=> res.json())
//             .then(data=>{
//                 console.log()
//             })

//     }
//     return (
//         <div>
//             <h2 className='text-3xl'>Post a new Job</h2>
//             <form onSubmit={handleAddJob} className="card-body">
//                 {/* job title */}
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Job Title</span>
//                     </label>
//                     <input type="text" name='jobTitle' placeholder="Job Title" className="input input-bordered" required />
//                 </div>
//                 {/* Job location */}
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Job Location</span>
//                     </label>
//                     <input type="text" placeholder="Job Location" className="input input-bordered" required />
//                 </div>
//                 {/* Job Type */}
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Job Field</span>
//                     </label>
//                     <select className="select select-bordered w-full max-w-xs">
//                         <option disabled selected>Pick a Job Field</option>
//                         <option>Engineering</option>
//                         <option>Marketing</option>
//                         <option>Finance</option>
//                         <option>Teaching</option>
//                     </select>
//                 </div>
//                 {/* Salary Range */}
//                 <p className='my-2'>Salary Range</p>
//                 <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-center'>
//                     <div className="form-control">
//                         <input type="text" name='min' placeholder="Min" className="input input-bordered" required />
//                     </div>
//                     <div className="form-control">
//                         <input type="text" name='max' placeholder="Max" className="input input-bordered" required />
//                     </div>
//                     {/* Currency */}
//                     <div className="form-control">
//                         <select name='currency' className="select select-bordered w-full max-w-xs">
//                             <option disabled selected>Currency</option>
//                             <option>BDT</option>
//                             <option>USD</option>
//                             <option>INR</option>
//                         </select>
//                     </div>
//                 </div>
//                 {/* Job description */}
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Job Description</span>
//                     </label>
//                     <textarea name='description' className="textarea textarea-bordered" placeholder="Job Description" required></textarea>
//                 </div>
//                 {/* Company Name */}
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Company Name</span>
//                     </label>
//                     <input type="text" name='company' placeholder="Company Name" className="input input-bordered" required />
//                 </div>

//                 {/* job requirements */}
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Job Requirements</span>
//                     </label>
//                     <input type="text" name='requirements' placeholder="Put Each Requirements into new line" className="input input-bordered" required />
//                 </div>
//                 {/* Responsibilities */}
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Job Responsibilities</span>
//                     </label>
//                     <input type="text" name='responsibilities' placeholder="Write Each Responsibilities into new line " className="input input-bordered" required />
//                 </div>
//                 {/* HR name */}
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">HR Name</span>
//                     </label>
//                     <input type="text" name='hr_name' placeholder="HR Name" className="input input-bordered" required />
//                 </div>
//                 {/* HR email */}
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">HR Email</span>
//                     </label>
//                     <input type="text" name='hr_email' placeholder="HR Email" className="input input-bordered" required />
//                 </div>
//                 {/* Company logo */}
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Company Logo URL</span>
//                     </label>
//                     <input type="text" name='company_logo' placeholder="Company Logo URL" className="input input-bordered" required />
//                 </div>

//                 {/* submit button */}
//                 <div className="form-control mt-6">
//                     <button className="btn btn-primary">Login</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default AddJob;

import React from 'react';

const AddJob = () => {

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

        // Replace with your actual backend URL
        fetch('https://your-backend-url.com/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Job posted successfully:', data);
                // Optional: add toast or redirect here
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
                        <input name="jobTitle" type="text" placeholder="e.g. Software Engineer" className="input input-bordered w-full" required />
                    </div>
                    <div>
                        <label className="label">Job Location</label>
                        <input name="jobLocation" type="text" placeholder="e.g. Dhaka, Bangladesh" className="input input-bordered w-full" required />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="label">Job Field</label>
                        <select name="jobField" className="select select-bordered w-full" required>
                            <option disabled selected value="">Pick a Job Field</option>
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
                        <input name="hr_email" type="email" className="input input-bordered w-full" required />
                    </div>
                </div>

                {/* Company Logo URL */}
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
