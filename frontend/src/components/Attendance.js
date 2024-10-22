import React, { useState } from 'react';
import '../styles.css';

const Attendance = () => {
  const [teacher, setTeacher] = useState('');
  const [student, setStudent] = useState('');
  const [status, setStatus] = useState('Present');

  const handleAttendance = (e) => {
    e.preventDefault();
    // Handle attendance submission to backend
  };

  return (
    <div className="form-container">
      <h2>Mark Attendance</h2>
      <form onSubmit={handleAttendance}>
        <input type="text" placeholder="Teacher ID" value={teacher} onChange={(e) => setTeacher(e.target.value)} />
        <input type="text" placeholder="Student ID" value={student} onChange={(e) => setStudent(e.target.value)} />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Attendance;
