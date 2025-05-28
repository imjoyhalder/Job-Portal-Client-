import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const HotJobs = () => {

    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/jobs')
            .then(res=>res.json())
            .then(data=>{
                setJobs(data)
                console.log(data)
            })
    },[])

    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 justify-center justify-items-center gap-4'>
                {
                    jobs.map(job=> <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;