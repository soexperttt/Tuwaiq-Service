import React, { useEffect } from "react";
import "../..//Css/Student.css";

import { useNavigate } from "react-router-dom";
const StudentLogin = ({ setIsLogged }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogged(false);
  }, []);

  const loginBTN = () => {
    setIsLogged(true);
    navigate("/student-dashboard");
  };
  const registerBTN = () => {
    navigate("/student-register");
  };
  const back = () => {
    navigate("/");
  };

  return (
    <div className="login-main">
      <div className="login-content">
        <h1> تسجيل دخول </h1>
        <div className="top">
          <input
            type="email"
            className="form-control"
            placeholder="البريد الالكتروني"
          />
          <input type="text" className="form-control" placeholder="كلمة السر" />
          <button onClick={loginBTN} type="button" className="button-64">
            <span className="text">سجل دخول</span>
          </button>
        </div>
        <div className="bottom">
          <button onClick={back} type="button" className="button-64">
            <span className="text"> ارجع </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
