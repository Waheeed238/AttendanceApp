import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Attendance Management System</h1>
      <p>
        This is a simple attendance management app where teachers can log in, register, and mark student attendance. Students can also register in the system.
      </p>
      <div className="links">
        <a href="/teacher/login" className="link-button">Teacher Login</a>
        <a href="/teacher/register" className="link-button">Teacher Register</a>
        <a href="/student/register" className="link-button">Student Register</a>
        <a href="/attendance" className="link-button">Mark Attendance</a>
      </div>
    </div>
  );
};

export default Home;
