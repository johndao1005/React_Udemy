import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)
  const handleSubmit = async(e)=>{
    e.preventDefault();
    setError(null);
    setLoading(true);
    
    const auth = getAuth();
    try{
    // create user api  
    const res = await signInWithEmailAndPassword(auth, email,password)
    

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
    <h2>Login</h2>
    {loading && <p>is loading</p>}
    {error && <p>{error}</p>}
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