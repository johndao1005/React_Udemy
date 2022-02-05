import "./Signup.css";
import { useSignup } from "../../hooks/useSignup"
import React, { useState } from 'react';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const [picError, setPicError] = useState(null)
    const { signup, isPending, error } = useSignup();

    const handleFileChange = (e) => {
        setThumbnail(null);
        let selected = e.target.files[0];
        if (!selected) {
            setPicError("Please select a file");
            return
        }
        if (!selected.type.includes("image")) {
            setPicError("Please select an image type");
            return
        }
        if (selected.size > 1000000) {
            setPicError("Please select a smaller file less than 100kb");
            return
        }

        setPicError(null);
        setThumbnail(selected)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, userName, thumbnail)
    }

    return <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <label>
            <span>email:</span>
            <input
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
        </label>
        <label>
            <span>password:</span>
            <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
        </label>
        <label>
            <span>username:</span>
            <input
                type="text"
                required
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
            />
        </label>
        <label>
            <span>profile pic:</span>
            <input
                type="file"
                required
                onChange={handleFileChange}
            />
            {picError && <p className="error">{picError}</p>}
        </label>
        {!isPending && <button className="btn">Sign up</button>}
        {isPending && <button className="btn" disabled>loading</button>}
        {error && <div className="error">{error}</div>}
    </form>;
}

export default Signup;
