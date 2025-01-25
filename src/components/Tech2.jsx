import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
const ServiceCard = ({ index, name, icon }) => {
  return (
    <Tilt className='xs:w-[150px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] py-5 px-12 flex flex-col justify-evenly items-center'
        >
          {' '}
          <img
            className='w-16 h-16 object-contain  drop-shadow-[3px_3px_10px_ rgba(255, 255, 255, 0.25)]'
            src={icon}
            alt={name}
          />
        </div>
      </motion.div>
    </Tilt>
  );
};
const Tech2 = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Skills I have</p>
        <h2 className={styles.heroHeadText}>Techs.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {technologies.map((tech, index) => (
          <ServiceCard key={tech.name} index={index} {...tech} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech2, '');
