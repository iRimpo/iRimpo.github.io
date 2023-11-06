import { React, useState, useRef } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';


import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, videoSrc }) => {
  // State to manage mute/unmute
  const [isMuted, setIsMuted] = useState(true);
  // State to manage hover state
  const [isHovered, setIsHovered] = useState(false);
  // Ref to access the video DOM element
  const videoRef = useRef(null);

  // Function to toggle mute/unmute and set volume
  const toggleMute = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (isMuted) {
        // If currently muted, unmute and set volume to 50%
        videoElement.muted = false;
        videoElement.volume = 0.5;
      } else {
        // If currently unmuted, mute the video
        videoElement.muted = true;
      }
      // Update state
      setIsMuted(!isMuted);
    }
  };

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && isMuted && (
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <span className="text-white">Click to hear</span>
          </div>
        )}
        <div
          options={{
            max: 40,
            scale: 1.15,
            speed: 450
          }}
          className="rounded-[20px] overflow-hidden min-h-[280px] flex justify-center items-center"
        >
          {/* Video element with onClick event to toggle mute */}
          <video
            ref={videoRef}
            src={videoSrc}
            alt="Video Content"
            className="object-cover w-full h-full"
            loop
            autoPlay
            muted={isMuted}
            onClick={toggleMute}
          />
        </div>
      </motion.div>
    </Tilt>
  );
};


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a Computer Science Student studying at Diablo Valley College in Pleasant Hill, CA. I'm currently expanding my techstack by working on different projects (such as this website). Currently working on Machine Learning Projects with Python, and looking for any opportunities to learn. My goal is to inspire others to pursue their passion even if it seems undoable!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about")