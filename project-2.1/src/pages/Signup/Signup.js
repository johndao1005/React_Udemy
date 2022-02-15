import React, { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function Signup() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)
  const handleSubmit = async(e)=>{
    e.preventDefault();
    setError(null);
    setLoading(true);
    
    const auth = getAuth();
    try{
    // create user api  
    const res = await createUserWithEmailAndPassword(auth, email,password)
    
    // update the user details to change their userName
    await res.user.updateProfile({displayName:userName})

    ///TODO login in the user
    console.log(res.user)
  } catch(e){
    ///set the error to display
    setError(e)
  }
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