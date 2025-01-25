import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { courses } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const CourseCard = ({ course }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={course.date}
    iconStyle={{ background: course.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full  '>
        <img
          src={course.icon}
          alt={course.company_name}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{course.title}</h3>
      <p
        className='text-secondary text-[16px] font-semibold'
        style={{ margin: 0 }}
      >
        {course.company_name}
      </p>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {course.points.map((point, index) => {
          return (
            <li
              key={`course-point-${index}`}
              className="'text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          );
        })}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const Courses = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Education so far</p>
        <h2 className={styles.heroHeadText}>Courses.</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {courses.map((course, index) => {
            return <CourseCard key={index} course={course} />;
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Courses, 'courses');
