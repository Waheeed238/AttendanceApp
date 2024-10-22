import React, { useState } from 'react';
import '../styles.css';

const StudentRegister = () => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [branch, setBranch] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration request to backend
  };

  return (
    <div className="form-container">
      <h2>Student Registration</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Roll No" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
        <input type="text" placeholder="Branch" value={branch} onChange={(e) => setBranch(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default StudentRegister;
