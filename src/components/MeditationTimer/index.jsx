import React, { useState, useEffect, useRef } from 'react';
import './index.css';

const MeditationTimer = () => {
  const [duration, setDuration] = useState(5); // 默认5分钟
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    setTimeLeft(duration * 60);
  }, [duration]);

  useEffect(() => {
    if (isActive && !isPaused) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalRef.current);
            setIsActive(false);
            setShowCompleted(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isActive, isPaused]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    setShowCompleted(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setIsPaused(false);
    setShowCompleted(false);
    setTimeLeft(duration * 60);
  };

  const handleDurationChange = (mins) => {
    if (!isActive) {
      setDuration(mins);
    }
  };

  return (
    <div className="meditation-timer">
      <div className="timer-display">
        <div className="time">{formatTime(timeLeft)}</div>
      </div>

      <div className="duration-selector">
        {[5, 10, 15, 20, 30].map((mins) => (
          <button
            key={mins}
            className={`duration-btn ${duration === mins ? 'active' : ''} ${isActive ? 'disabled' : ''}`}
            onClick={() => handleDurationChange(mins)}
            disabled={isActive}
          >
            {mins}分钟
          </button>
        ))}
      </div>

      <div className="timer-controls">
        {!isActive ? (
          <button className="control-btn start" onClick={handleStart}>
            开始冥想
          </button>
        ) : isPaused ? (
          <>
            <button className="control-btn resume" onClick={handleResume}>
              继续
            </button>
            <button className="control-btn reset" onClick={handleReset}>
              重置
            </button>
          </>
        ) : (
          <>
            <button className="control-btn pause" onClick={handlePause}>
              暂停
            </button>
            <button className="control-btn reset" onClick={handleReset}>
              重置
            </button>
          </>
        )}
      </div>

      {showCompleted && (
        <div className="completion-message">
          <p>冥想已完成</p>
          <p>愿你感受内心的平静与智慧</p>
          <button className="restart-btn" onClick={handleReset}>
            再次冥想
          </button>
        </div>
      )}
    </div>
  );
};

export default MeditationTimer;
