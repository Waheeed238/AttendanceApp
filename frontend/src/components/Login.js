import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/teachers/login', formData);
            alert('Login successful');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
                
                <label>Password</label>
                <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
                
                <button type="submit">Login</button>
            </form>
            <footer>Don't have an account? Register instead.</footer>
        </div>
    );
};

export default Login;