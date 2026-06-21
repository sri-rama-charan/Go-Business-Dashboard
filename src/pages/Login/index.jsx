import "./index.css";
import { useState } from "react";
import { loginUser } from "../../services/authApi";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Form submitted");
    const res = await loginUser(email, password);
    const data = await res.json();
    console.log(data);
    if(data.success)
    {
      Cookies.set("jwt_token", data.data.token);
      setError("");
      navigate("/", { replace: true });
    }
    else{
      setError(data.message);

    }
  }


  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h1 className="login-title">Go Business</h1>
          <p className="login-subtitle">
            Sign in to open your referral dashboard.
          </p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            aria-label="Email address"
            value={email}
            onChange={handleEmailChange}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            aria-label="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit" className="login-button">
            Sign in
          </button>
          <p className="error-msg">{error}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
