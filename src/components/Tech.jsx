import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Skills I have</p>
        <h2 className={styles.heroHeadText}>Techs.</h2>
      </motion.div>
      <div className='mt-10 justify-center flex flex-row flex-wrap gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            {' '}
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
