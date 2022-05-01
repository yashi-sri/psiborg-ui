import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  // loginHandler
  const loginHandler = () => {
    if (email && password) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      navigate("/cart");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("email") && localStorage.getItem("password")) {
      navigate("/cart");
    }
  }, []);

  return (
    <>
      <div className="login-container">
        <form onSubmit={loginHandler}>
          <div className="form-input">
            <input
              type="email"
              className="input-field"
              value={email}
              required
              placeholder="*Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-input">
            <input
              type="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*Password"
              required
            />
          </div>
          <div className="form-input remember-me">
            <span>
              <input type="checkbox" className="" /> Remember me
            </span>
            <span className="">
              <Link to="">Forgot Password</Link>
            </span>
          </div>
          <div className="form-input login-btn">
            <button type="submit">Login</button>
          </div>
          <div>
            <p>
              Don't have an account <Link to="">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
