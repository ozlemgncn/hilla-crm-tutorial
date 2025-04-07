import { LoginForm, LoginFormLoginEvent } from '@vaadin/react-components/LoginForm';
import { useState } from 'react';
import { login } from 'Frontend/generated/LoginEndpoint';
import { useNavigate } from 'react-router';

export default function Login() {
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e: LoginFormLoginEvent) => {
        try {
            const token: string = await login(e.detail.username, e.detail.password);
            localStorage.setItem('token', token);
            navigate('/result-message-managment'); // sayfa yenilenmeden yönlendirme
        } catch {
            setError(true);
        }
    };

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            height: '100vh', background: '#f4f4f4'
        }}>
            <LoginForm error={error} onLogin={handleLogin} />
        </div>
    );
}

// Bu ekran layout'suz gözüksün
export const config = {
    layout: false
};
