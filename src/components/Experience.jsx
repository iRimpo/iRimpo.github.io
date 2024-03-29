import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from'../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => {
  return (
    
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        boxShadow: "none",
        border: "none",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      
      {/* PDF Thumbnail above the text box taken from robin :) */}
      <div className="mb-4 rounded-lg flex-grow border-4 border-white-500">
        <a href={experience.link} target="_blank" rel="noopener noreferrer">
          <img
            src={experience.proj}
            alt={`Thumbnail for ${experience.title}`}
            className='w-full object-contain rounded cursor-pointer'
            title="Click to view/download PDF"
          />
        </a>
      </div>

      {/* Experience box taken from robin :) */}
      <div
        style={{
          background: "#000000",
          boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.07)",
          border: "5px solid #FCE44D",
          backgroundImage: "linear-gradient(to bottom right, #1a1a1a, #2a2a2a)",
        }}
        className="p-4 rounded-lg flex-grow"
      >
        <h3 className='text-secondary text-[28px] font-bold'>{experience.title}</h3>
        <p className='text-white-100 text-[20px] font-semibold mt-2'>{experience.company_name}</p>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100-100 text-[15px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Extracurriculars & Work</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>    
    </>
  )
}

export default SectionWrapper(Experience, "work")