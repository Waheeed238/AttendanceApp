import React from 'react';
import '../styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Attendance App</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/teacher/login">Teacher Login</a></li>
        <li><a href="/teacher/register">Teacher Register</a></li>
        <li><a href="/student/register">Student Register</a></li>
        <li><a href="/attendance">Attendance</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
