import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/AuthProvider';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  
  const handleLogin = () => {
    auth.login({email, password});
    navigate('/');
  }
  
  return (
    <div>
      <form>
        <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Sign in</button>
      </form>
    </div>
  )
}

export default Login;