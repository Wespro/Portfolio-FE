import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import linkedin from '../assets/contact2Icons/linkedin.png';
import github from '../assets/contact2Icons/github.png';
import behance from '../assets/contact2Icons/behance.png';
import gmail from '../assets/contact2Icons/gmail.png';
const Contact = () => {
  // const formRef = useRef();
  // const [form, setForm] = useState({ name: '', email: '', mess: '' });
  // const [isloading, setIsLoading] = useState(false);
  // const handleChange = (e) => {};
  // const handleSubmit = (e) => {};
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden '>
      <motion.div
        className=' flex-[.80] self-center bg-black-100 p-8 rounded-2xl'
        variants={slideIn('left', 'tween', 0.2, 1)}
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <div className='mt-5 flex gap-5 justify-around items-center xl:flex-nowrap flex-wrap '>
          <a
            href='https://www.linkedin.com/in/abdelrahman-mohammed-b1bb69225/'
            target='_blank'
          >
            <img
              className='h-16  rounded-2xl  hover:shadow-lg
             hover:shadow-red-500/50 shadow-red-500/50 cursor-pointer hover:scale-105  '
              src={linkedin}
              alt='linkedin icons'
            />
          </a>
          <a href='https://github.com/Wespro' target='_blank'>
            <img
              className=' h-20 rounded-full shadow-lg  hover:shadow-lg
             hover:shadow-red-500/80 shadow-red-500/50 cursor-pointer hover:scale-105  '
              src={github}
              alt='github icons'
            />
          </a>
          <a href='mailto:abdelrahmanmohamedwork5533@gmail.com' target='_blank'>
            <img
              className='h-16 rounded-2xl  hover:shadow-lg
             hover:shadow-red-500/50 shadow-red-500/50  cursor-pointer hover:scale-105  '
              src={gmail}
              alt='gmail icons'
            />
          </a>
          <a href='https://www.behance.net/Abdelrahman5533' target='_blank'>
            <img
              className='h-16 rounded-2xl hover:shadow-lg
             hover:shadow-red-500/50 shadow-red-500/50 cursor-pointer hover:scale-105  '
              src={behance}
              alt='behance icons'
            />
          </a>
        </div>
      </motion.div>
      <motion.div
        className='xl:flex-1 xl:h-[550px] md:h-full h-[350px] '
        variants={slideIn('right', 'tween', 0.2, 1)}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
