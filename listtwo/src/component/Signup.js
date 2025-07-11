import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axio/Api"; 

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/signup", { email, password });
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="page">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} className="input"/>

        <input type="password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)}
        className="input"/>
        
        <button type="submit" className="button">
          Signup
        </button>
      </form>

      <p className="linktext">
        Already have an account?{" "}
        <span className="link" onClick={() => navigate("/login")}>
          Login here
        </span>
      </p>
    </div>
  );
}

export default Signup;
