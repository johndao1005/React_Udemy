import "./Login.css";
import {useLogin} from "../../hooks/useLogin"
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(""); 
  const {login,error, isPending}= useLogin();

  const handleSubmit =(e)=>{
    e.preventDefault();
    login(email,password);
  }

  return <form className="auth-form" onSubmit={handleSubmit}>
    <h2>Login</h2>
    <label>
      <span>email:</span>
      <input 
      type="email"
      required
      onChange={(e)=>setEmail(e.target.value)}
      value={email}
      />
    </label>
    <label>
      <span>password:</span>
      <input 
      type="password"
      required
      onChange={(e)=>setPassword(e.target.value)}
      value={password}
      />
    </label>
    {error && <p className="error">{error}</p>}
    {!isPending && <button className="btn"type="submit">Login</button>}
    {isPending && <button className="btn" disabled>Loading</button>}
  </form>;
}

export default Login;
