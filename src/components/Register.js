import React, { useState } from 'react';
import '../styles/Register.css';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registrationMessage, setRegistrationMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setRegistrationMessage('Registration completed');

        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="form-group">
                    <input
                        placeholder='Email'
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        placeholder='Password'
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        placeholder='Confirm Password'
                        type="password"
                        className="form-control"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="button">Register</button>
            </form>
            {registrationMessage && <p>{registrationMessage}</p>}
        </div>
    );
}

export default Register;
