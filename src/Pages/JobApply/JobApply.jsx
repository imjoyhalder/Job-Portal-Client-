import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import Swal from 'sweetalert2'

const JobApply = () => {

    const { user, } = useAuth()
    const id = useParams()


    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const linkedin = form.linkedinUrl.value
        const github = form.githubUrl.value
        const resume = form.resumeUrl.value
        //console.log(linkedinUrl, githubUrl, resumeUrl)

        const jobApplication = {
            job_id: id,
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

        <div className="card bg-base-100 mx-auto w-full  shadow-2xl">
            <h1 className="text-5xl text-center font-bold">Apply Job and Good Luck!</h1>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">LinkedIn URL</span>
                    </label>
                    <input type="url" placeholder="LinkedIn URL" name='linkedinUrl' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">GitHub URL</span>
                    </label>
                    <input type="url" name='githubUrl' placeholder="GitHub URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume URL</span>
                    </label>
                    <input type="url" name='resumeUrl' placeholder="Resume URL" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Apply</button>
                </div>
            </form>
        </div>

    );
};

export default JobApply;