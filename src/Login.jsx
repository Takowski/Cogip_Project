import axios from 'axios';
import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('https://api-cogip-329f9c72c66d.herokuapp.com/api/users', {
                email,
                password
            });

            const token = response.data.token;

            // Store the token for later use
            localStorage.setItem('token', token);
        } catch (error) {
            console.error('Error:', error);
            console.log(error.response);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Log in</button>
        </form>
    );
}

export default Login;

