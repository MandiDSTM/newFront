import React, { useState, useEffect } from 'react';
import { AuthContext } from './AutContex';
import axios from 'axios';

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    const [username, setUsername] = useState('');
    const [userId, setUserId] = useState('');
    const [admin, setAdmin] = useState(null)
    // const [pduSerial, setPduSerial] = useState('')
    // const [state, setState] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedUsername = localStorage.getItem('username');
        const storedUserId = localStorage.getItem('userId');
        const storedIsAdmin = localStorage.getItem('admin');

        if (token && storedUsername && storedUserId) {
            setAuth(token);
            setUsername(storedUsername);
            setUserId(storedUserId);
            setAdmin(storedIsAdmin)
        }
    }, []);

    const signOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        localStorage.removeItem('admin')
        setAuth(null);
        setUsername('');
        setUserId('');
    };

    const minerHandle = async () => {
        try {
            const response = await axios.post('http://localhost:3000/pducommand', { userId });
            return response.data
        } catch (e) {
            console.error('Error in minerHandle:', e);
        }
    }


    return (
        <AuthContext.Provider value={{ auth, setAuth, username, setUsername, userId, setUserId, admin, setAdmin, signOut, minerHandle}}>
            {children}
        </AuthContext.Provider>
    );
};
