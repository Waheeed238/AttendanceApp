import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/teachers/register', formData);
            alert('Teacher registered successfully');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" onChange={handleChange} placeholder="Name" required />
                
                <label>Email</label>
                <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
                
                <label>Password</label>
                <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
                
                <button type="submit">Register</button>
            </form>
            <footer>Already have an account? Login instead.</footer>
        </div>
    );
};

export default Register;