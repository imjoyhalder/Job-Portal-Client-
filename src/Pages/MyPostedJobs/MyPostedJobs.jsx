import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/UseAuth';
import { MdDeleteForever } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {

    const [jobs, setJobs] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        fetch(`http://localhost:3000/jobs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])

    console.log(jobs)
    //{"_id":{"$oid":"6836f3c13fb84393237ee977"},"title":"Software Engineer","location":"Halishohor, Chittagong","jobType":"Hybrid","category":"Engineering","applicationDeadline":"2024-12-31","salaryRange":{"min":{"$numberInt":"40000"},"max":{"$numberInt":"60000"},"currency":"bdt"},"description":"We are seeking a skilled Software Engineer to join our dynamic team. The candidate will work on diverse projects and contribute to innovative solutions.","company":"Favorite IT","requirements":["JavaScript","React","Node.js","MongoDB"],"responsibilities":["Develop and maintain software","Collaborate with the team","Participate in code reviews"],"status":"active","hr_email":"hr@techsolutions.com","hr_name":"Farhan Rahman","company_logo":"https://i.ibb.co/mXD5MNf/facebook.png"}

    return (
        <div>
            <h2 className='text-3xl'>My Posted Jobs: {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Category</th>
                            <th>Deadline</th>
                            <th>Company</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, idx) => (
                                <tr>
                                    <td className='text-xl'>{idx+1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={job.company_logo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    
                                    <td>
                                        <p className=''>{job?.title}</p>
                                    </td>
                                    <td>{job?.jobField}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">{job?.applicationDeadline}</button>
                                    </th>
                                    <td>
                                        {job?.company}
                                    </td>
                                    <td>
                                        <div className='grid grid-cols-1 gap-1 lg:grid-cols-3'>
                                            <button className='btn'><MdDeleteForever size={30} color='red' /></button>
                                            <button className='btn'><FaPen size={24} color='green' /></button>
                                            <Link to={`/jobs/${job._id}`} className='btn'><TbListDetails size={24}  color='blue'/></Link>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;