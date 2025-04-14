import React, { useState } from 'react';
import { jobsData } from '../data';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import JobCard from './JobCard';

function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCriteria, setFilterCriteria] = useState({
        major: '',
        year: '',
        system: ''
    });

    // Lọc dữ liệu dựa trên tìm kiếm và tiêu chí lọc
    const filteredJobs = jobsData.filter(job => {
        const matchesSearch =
            job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.description.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesMajor = filterCriteria.major ? job.major === filterCriteria.major : true;
        const matchesYear = filterCriteria.year ? job.year === filterCriteria.year : true;
        const matchesSystem = filterCriteria.system ? job.system === filterCriteria.system : true;

        return matchesSearch && matchesMajor && matchesYear && matchesSystem;
    });

    return (
        <div style={{ margin: '20px' }}>
            <h1>Danh sách các công việc và học bổng</h1>
            <SearchBar setSearchQuery={setSearchQuery} />
            <FilterBar filterCriteria={filterCriteria} setFilterCriteria={setFilterCriteria} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
                {filteredJobs.map(job => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
}

export default Home;
