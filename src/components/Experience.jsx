import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import SectionWrapper from '../hoc/SectionWrapper';
import { textVariant } from '../utils/motion';

const ExperinceCard = ({ experince }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px ,solid #232631 ' }}
    date={experince.date}
    iconStyle={{ background: experince.iconBg }}
    icon={
      <div className=" flex justify-center items-center w-full h-full">
        <img
          src={experince.icon}
          alt={experince.company_name}
          className="w-[100%] h-[100%] object-contain rounded-full"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experince.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experince.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experince.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] p1-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What i have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col ">
        <VerticalTimeline>
          {experiences.map((experince, index) => (
            <ExperinceCard key={index} experince={experince} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
