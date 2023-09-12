import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import bl from "./bl.mp4";
import throttle from 'lodash/throttle';
import './videoplayer.style.css'; // Импорт стилей
import { useNavigate } from 'react-router-dom';

function VideoPlayer() {
  const navigate = useNavigate();
  const [startExitAnimation, setStartExitAnimation] = useState(false);
 

  function animationStart() {
    setStartExitAnimation(true); 
    setTimeout(() => {
      navigate('/home');
    }, 1200); 
  }
  const handleVideoEnd = () => {
    setTimeout(() => {
  
    animationStart()
    }, 7000);
  };

  useEffect(() => {
    handleVideoEnd();
  }, []);

  return (
    <div className={`video-container ${startExitAnimation ? 'video-exit' : ''}`} onClick={animationStart}>
      <video className="video-element" loop muted autoPlay>
        <source src={bl} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;
