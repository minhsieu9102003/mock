import React from 'react';

function FilterBar({ filterCriteria, setFilterCriteria }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilterCriteria(prev => ({ ...prev, [name]: value }));
    };

    // Các lựa chọn mẫu. Bạn có thể cập nhật danh sách này theo nhu cầu.
    const majors = ["", "Ngoại ngữ", "Kinh tế", "Công nghệ"];
    const years = ["", "Khoa 2021", "Khoa 2022", "Khoa 2023"];
    const systems = ["", "Tiên tiến", "Chính quy"];

    return (
        <div style={{ marginBottom: '20px' }}>
            <label>
                Ngành học:
                <select name="major" value={filterCriteria.major} onChange={handleChange}>
                    {majors.map((major, index) => (
                        <option key={index} value={major}>{major || 'Tất cả'}</option>
                    ))}
                </select>
            </label>
            <label style={{ marginLeft: '20px' }}>
                Niên khóa:
                <select name="year" value={filterCriteria.year} onChange={handleChange}>
                    {years.map((year, index) => (
                        <option key={index} value={year}>{year || 'Tất cả'}</option>
                    ))}
                </select>
            </label>
            <label style={{ marginLeft: '20px' }}>
                Hệ học:
                <select name="system" value={filterCriteria.system} onChange={handleChange}>
                    {systems.map((system, index) => (
                        <option key={index} value={system}>{system || 'Tất cả'}</option>
                    ))}
                </select>
            </label>
        </div>
    );
}

export default FilterBar;
