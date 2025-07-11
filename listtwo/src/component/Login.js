import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axio/Api"; // Axios instance

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token); 
      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)}
          className="input" />

        <input
          type="password" placeholder="Password"
          value={password} required onChange={(e) => setPassword(e.target.value)}
          className="input" />
          
        <button type="submit" className="button">
          Login
        </button>
      </form>

      <p className="linktext">
        Don’t have an account?{" "}
        <span className="link" onClick={() => navigate("/")}>
          Signup here
        </span>
      </p>
    </div>
  );
}

export default Login;
