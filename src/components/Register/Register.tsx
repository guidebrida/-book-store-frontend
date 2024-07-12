// src/components/Register/Register.tsx
import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register: React.FC = () => {
    const [clientName, setClientName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        // Add your registration logic here
        // For example, you could send the data to a backend API
        console.log({
            clientName,
            email,
            cpf,
            phoneNumber,
        });
        navigate('/login');
    };

    return (
        <div className="register-container">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="clientName">Name:</label>
                    <input
                        type="text"
                        id="clientName"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="register-button">Create Account</button>
            </form>
        </div>
    );
};

export default Register;
