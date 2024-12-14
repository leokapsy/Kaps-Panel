import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem("userToken"); 
    navigate("/login"); 
  };

  const handleCancel = () => {
    navigate("/dashboard"); 
  };

  return (
    <div className="logout-container">
      <div className="logout-box">
        <h1>Are you sure you want to log out?</h1>
        <p>You will need to log in again to access your account.</p>
        <div className="logout-actions">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
