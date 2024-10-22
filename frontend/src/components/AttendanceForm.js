import React, { useState } from 'react';
import axios from 'axios';

const AttendanceForm = () => {
    const [formData, setFormData] = useState({ studentId: '', status: 'Present' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/attendance/take', formData);
            alert('Attendance taken');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <h1>Take Attendance</h1>
            <form onSubmit={handleSubmit}>
                <label>Student ID</label>
                <input type="text" name="studentId" onChange={handleChange} placeholder="Student ID" required />
                
                <label>Status</label>
                <select name="status" onChange={handleChange}>
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                </select>
                
                <button type="submit">Submit Attendance</button>
            </form>
        </div>
    );
};

export default AttendanceForm;