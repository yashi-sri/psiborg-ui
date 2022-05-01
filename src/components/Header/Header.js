import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Header.css";
import Logo from "../../image/logo.png";

const Header = () => {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(false);

  // logout
  const logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    setIsAuth(false);
    navigate("/login");
  };
  useEffect(() => {
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    if (email && password) {
      setIsAuth(true);
    }
  }, []);
  return (
    <>
      <nav>
        <div>
          <i class="fa fa-bars"></i>
        </div>
        <div className="nav-left">
          {!isAuth ? (
            <>
              <button onClick={() => navigate("/login")}>Login</button>
            </>
          ) : (
            <>
              <button onClick={() => logout()}>Logout</button>
            </>
          )}
          <img src={Logo} alt="" />
        </div>
      </nav>
    </>
  );
};

export default Header;
