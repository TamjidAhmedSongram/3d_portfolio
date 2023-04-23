import React from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-tilt'
import { styles } from '../styles'
import { services } from '../constant/constants'
import { fadeIn, textVariant } from './../utils/utils';
import { SectionWrapper } from '../hoc'
const ServiceCard = ({index, title , icon}) => {
  return <Tilt
    className=" xs:w-[250px] w-full" options={{
      max: 45,
      scale: 1,
      speed: 450

    }}>
    <motion.div variants={fadeIn("right", "spring",0.5*index,0.74)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div 
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'    
      >
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction </p>
        <h2 className={styles.sectionHeadText}> Overview.  </h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className=' mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Hi, I'm a frontend web developer with expertise in React JS, Next JS, CSS, Tailwind and Typescript. I have over three years of experience in building responsive and user-friendly websites and web applications using modern technologies and best practices. I enjoy working on challenging projects that require creativity and problem-solving skills. You can see some of my work on my GitHub profile or on my personal website. I'm open to new opportunities to collaborate with other developers and clients who share my passion for web development. Contact me anytime if you are interested. I'd love to hear from you! 
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => {
           return <ServiceCard key={service.title} index={index} {...service}/>
          })}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")