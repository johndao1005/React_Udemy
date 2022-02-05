import "./Login.css";

import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(""); 
  
  return <form className="auth-form" onSubmit={()=>{}}>
    <h2>Sign up</h2>
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
  
    <button className="btn"type="submit">Login</button>
  </form>;
}

export default Login;
