import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import Swal from 'sweetalert2'

const JobApply = () => {

    const navigate = useNavigate()

    const { user } = useAuth()
    const { id } = useParams();
    const cleanId = id.startsWith(":") ? id.slice(1) : id;


    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const linkedin = form.linkedinUrl.value
        const github = form.githubUrl.value
        const resume = form.resumeUrl.value
        //console.log(linkedinUrl, githubUrl, resumeUrl)

        const jobApplication = {
            job_id: cleanId,
            applicant_email: user.email,
            linkedin,
            github,
            resume,
        }

        fetch('http://localhost:3000/job-applications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Application Submitted Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    navigate('/myApplications')
                }
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Something Went Wrong',
                    icon: 'error',
                    confirmButtonText: 'Close'
                })
            })
    }

    return (

        <div className="max-w-xl my-10 mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-6">
            <h1 className="text-3xl font-bold text-center text-gray-800">
                Apply for the Job 🎯
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        LinkedIn URL
                    </label>
                    <input
                        type="url"
                        name="linkedinUrl"
                        placeholder="https://linkedin.com/in/yourname"
                        className="w-full input input-bordered input-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        GitHub URL
                    </label>
                    <input
                        type="url"
                        name="githubUrl"
                        placeholder="https://github.com/yourname"
                        className="w-full input input-bordered input-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Resume URL
                    </label>
                    <input
                        type="url"
                        name="resumeUrl"
                        placeholder="https://yourdomain.com/resume.pdf"
                        className="w-full input input-bordered input-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="btn btn-primary w-full py-2 text-lg font-semibold rounded-xl hover:scale-105 transition-transform"
                    >
                        Submit Application 🚀
                    </button>
                </div>
            </form>
        </div>


    );
};

export default JobApply;