import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Code = () => {
    const [code, setCode] = useState("");
    const [timeLeft, setTimeLeft] = useState(6); 
    const [isResendDisabled, setIsResendDisabled] = useState(true);
    const navigate = useNavigate(); 
    useEffect(() => {
      if (timeLeft > 0) {
        const timer = setInterval(() => {
          setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
      } else {
        setIsResendDisabled(false);
      }
    }, [timeLeft]);
  
    useEffect(() => {
      
      if (code.trim() === "123456") {
        console.log("Code verified, redirecting to dashboard");
        navigate("/dashboard");
      }
    }, [code, navigate]); 
  
    const handleCodeChange = (e) => {
      setCode(e.target.value);
    };
  
    const handleResend = () => {
      setTimeLeft(60);
      setIsResendDisabled(true);
      
      console.log("Resend code triggered");
    };
  
    return (
      <div className="verification-container">
        <h1>Code Verification</h1>
        <p>Please enter the code sent to your email or phone.</p>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter your code"
            value={code}
            onChange={handleCodeChange}
            maxLength={6}
          />
         
        </div>
        <div className="timer">
          {timeLeft > 0 ? (
            <p>Resend available in {timeLeft} seconds</p>
          ) : (
            <p>You can resend the code now</p>
          )}
        </div>
        <button
          className="resend-button"
          onClick={handleResend}
          disabled={isResendDisabled}
        >
          Resend Code
        </button>
      </div>
    );
  };
  
  export default Code;
