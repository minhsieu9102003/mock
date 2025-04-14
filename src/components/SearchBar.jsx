import React from 'react';

function SearchBar({ setSearchQuery }) {
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <input
                type="text"
                placeholder="Tìm kiếm công việc/học bổng..."
                onChange={handleSearch}
                style={{ padding: '10px', width: '300px' }}
            />
        </div>
    );
}

export default SearchBar;
