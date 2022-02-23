import React, { useState } from 'react';
import { useSignup } from '../../hooks/userHooks';


function Signup() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { signup, error, loading } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email,userName, password,confirmPassword)
  }

  

  return (
    <>
    <form className="details-form" onSubmit={handleSubmit}>
    <h2>Signup</h2>
    {loading && <p>is loading</p>}
    {error && <p>{error}</p>}
    <label>
        <span>Username</span>
        <input type="text"
        onChange={(e)=>{setUserName(e.target.value)}}
        value={userName}
        placeholder="Enter your username"/>
      </label>
      <label>
        <span>Email</span>
        <input type="email"
        onChange={(e)=>{setEmail(e.target.value)}}
        value={email}
        placeholder="Enter your email address"/>
      </label>
      <label>
        <span>Password</span>
        <input type="password"
        onChange={(e)=>{setPassword(e.target.value)}}
        value={password}
        placeholder="Enter your password"/>
      </label>
      <label>
        <span>Confirm Password</span>
        <input type="password"
        onChange={(e)=>{setConfirmPassword(e.target.value)}}
        value={confirmPassword}
        placeholder="Enter your confirm password"/>
      </label>
      <button type="submit">Signup</button>
    </form>
    </>
  )
}

export default Signup