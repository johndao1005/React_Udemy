import React, { useState } from 'react';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    //TODO add login function
  }
  return (
    <>
    <form className="details-form" onSubmit={handleSubmit}>
    <h2>Login</h2>
      <label>
        <span>Email</span>
        <input type="email"
        onChange={(e)=>{setEmail(e.target.value)}}
        placeholder="Enter your email address"
        value={email}/>
      </label>
      <label>
        <span>Password</span>
        <input type="password"
        onChange={(e)=>{setPassword(e.target.value)}}
        placeholder="Enter your password "
        value={password}/>
      </label>
      <button type="submit">Login</button>
    </form>
    </>
  )
}

export default Login