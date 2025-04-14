import React from 'react';
import { Link } from 'react-router-dom';

function JobCard({ job }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', width: '300px', borderRadius: '8px' }}>
            <h3>{job.title}</h3>
            <p>{job.major} - {job.year}</p>
            <p>{job.system}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link to={`/detail/${job.id}`}>Chi tiết</Link>
                <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">Apply</a>
            </div>
        </div>
    );
}

export default JobCard;
