import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import maxwell from '../assets/maxwell.mp3';

const PlayButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const listener = useRef(new THREE.AudioListener());
  const audioLoader = useRef(new THREE.AudioLoader());
  const backgroundSound = useRef(new THREE.Audio(listener.current));

  useEffect(() => {
    const audioContext = new AudioContext();
    audioLoader.current.load(maxwell, function (buffer) {
      backgroundSound.current.setBuffer(buffer);
      backgroundSound.current.setLoop(true);
      backgroundSound.current.setVolume(0.4);
      backgroundSound.current.setPlaybackRate(1);
      backgroundSound.current.connect(audioContext.destination);
    });
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      backgroundSound.current.pause();
    } else {
      backgroundSound.current.play();
    }
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <button onClick={togglePlay}>
      {isPlaying ? 'Pause' : 'Play'}
    </button>
  );
};

export default PlayButton;
