import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences, educations, clubs } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const TimelineCard = ({ item }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        boxShadow: "none",
        border: "none",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #000000" }}
      date={item.date}
      iconStyle={{ background: item.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={item.icon}
            alt={item.company_name}
            className='w-[60%] h-[60%] object-contain, font-black'
          />
        </div>
      }
    >
      {/* PDF Thumbnail if applicable */}
      {item.proj && (
        <div className="mb-4 rounded-lg flex-grow border-4 border-white-500">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img
              src={item.proj}
              alt={`Thumbnail for ${item.title}`}
              className='w-full object-contain rounded cursor-pointer'
              title="Click to view/download PDF"
            />
          </a>
        </div>
      )}

      {/* Content Box */}
      <div
        style={{
          background: "#000000",
          boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.07)",
          border: "5px solid #000000",
          backgroundImage: "linear-gradient(to bottom right, #000000, #2a2a2a)",
        }}
        className="p-4 rounded-lg flex-grow"
      >
        <h3 className='text-secondary text-[28px] font-bold'>{item.title}</h3>
        <p className='text-white-100 text-[20px] font-semibold mt-2'>{item.company_name}</p>
        <p className='text-white-100 text-[20px] font-semibold mt-2'>{item.name}</p>
        {item.points && (
          <ul className='mt-5 list-disc ml-5 space-y-2'>
            {item.points.map((point, index) => (
              <li
                key={`point-${index}`}
                className='text-white-100-100 text-[15px] pl-1 tracking-wider'
              >
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      {/* Education Timeline */}
      <h2 className={`${styles.sectionHeadText} text-center text-[40px] font-bold`} style={{ color: '#000000' }}>
        Education
      </h2>

      <div className="mt-15 flex flex-col">
        <VerticalTimeline lineColor="#000000">
          {educations.map((education, index) => (
            <TimelineCard key={index} item={education} />
          ))}
        </VerticalTimeline>
      </div>

      {/* Experience Timeline */}
      <h2 className={`${styles.sectionHeadText} text-center text-[40px] font-bold`} style={{ color: '#000000' }}>
        Work Experience
      </h2>

      <div className="mt-15 flex flex-col">
        <VerticalTimeline lineColor="#000000">
          {experiences.map((experience, index) => (
            <TimelineCard key={index} item={experience} />
          ))}
        </VerticalTimeline>
      </div>    

      <h2 className={`${styles.sectionHeadText} text-center text-[40px] font-bold`} style={{ color: '#000000' }}>
        Extracurriculars & Clubs
      </h2>

      <div className="mt-15 flex flex-col">
        <VerticalTimeline lineColor="#000000">
          {clubs.map((clubs, index) => (
            <TimelineCard key={index} item={clubs} />
          ))}
        </VerticalTimeline>
      </div>  
    </>
  )
}

export default SectionWrapper(Experience, "work");
