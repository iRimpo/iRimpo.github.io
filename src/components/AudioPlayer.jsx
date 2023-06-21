import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import maxwell from '../assets/maxwell.mp3';

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div >
      {!isPlaying ? (
        <button onClick={handlePlay}>Play</button>
      ) : (
        <ReactAudioPlayer src={maxwell} autoPlay controls />
      )}
    </div>
  );
}

export default AudioPlayer;
