import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { jobsData } from '../data';

function JobDetail() {
    const { id } = useParams();
    const job = jobsData.find(item => String(item.id) === id);

    if (!job) {
        return <div>Không tìm thấy thông tin công việc/học bổng.</div>;
    }

    return (
        <div style={{ margin: '20px' }}>
            <h1>{job.title}</h1>
            <p><strong>Ngành học:</strong> {job.major}</p>
            <p><strong>Niên khóa:</strong> {job.year}</p>
            <p><strong>Hệ học:</strong> {job.system}</p>
            <p>{job.description}</p>
            <div style={{ margin: '20px 0' }}>
                <a
                    href={job.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ padding: '10px 20px', background: '#0070f3', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}
                >
                    Apply
                </a>
            </div>
            <Link to="/">← Quay lại danh sách</Link>
        </div>
    );
}

export default JobDetail;
