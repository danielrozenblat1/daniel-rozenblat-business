// VideoPlayer.jsx
import { useState, useRef } from 'react';
import styles from './VideoContainer.module.css';

const VideoPlayer = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoRef}
        className={styles.video}
        src={props.src}
        playsInline
        onClick={handleVideoClick}
      >
        Your browser does not support the video tag.
      </video>
      
      {!isPlaying && (
        <div 
          className={styles.overlay}
          onClick={handleVideoClick}
        >
          <button
            className={styles.playButton}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            <svg 
              className={styles.playIcon}
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}
      
      {isPlaying && (
        <button
          className={styles.pauseButton}
          onClick={handleVideoClick}
          aria-label="Pause video"
        >
          <svg 
            className={styles.pauseIcon}
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;