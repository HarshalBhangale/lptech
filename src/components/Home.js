import React, { useState, useEffect } from 'react';
import './Home.css';
import Blob1 from "../Assets/blob1.png";
import Blob2 from "../Assets/blob2.png";
import logo from "../Assets/logo.png";

const Home = () => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);


    return (
      <div className="App">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="blob1">
          <img src={Blob1} alt="" />
        </div>
        <div className="blob2">
          <img src={Blob2} alt="" />
        </div>
    
        <div className="countdown-container">
          <div className="countdown">
            <div className="countdown-text">
              <h1>Launching New Module Soon!</h1>
              <p>
                Exciting things are in the works! We're currently crafting a new
                feature for you. Keep an eye out for updates – we're working to make
                it available soon!
              </p>
              <h2>Get ready for the reveal!</h2>
            </div>
            <div className="countdown-timer">
              <div className="countdown-number">{countdown}</div>
            </div>
            <p>Be the first to know! Share your email, and we'll notify you when it's live</p>
            <div className="input-container">
              <input
                type="text"
                placeholder="Please enter your email address."
                required
              />
              <button onClick={() => alert(`You entered: `)}>Notify Me</button>
            </div>
          </div>
        </div>
      </div>
    );
    }

export default Home;
