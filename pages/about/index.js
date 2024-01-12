import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        id:1,
        title: 'Web Development',
        icons: [

          <FaHtml5 />,
          // <FaCss3 />,
          // <FaJs />,
          // <FaReact />,
          // <SiNextdotjs />,
          // <SiFramer />,
          // <FaWordpress />,
        ],
      },
      {
        id:2,
        title: 'UI/UX Design',
        // icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        id:3,
        title: 'Certificate of Appreciation - DIU',
        stage: '2019',
      },
      {
        id:4,
        title: 'Participation in KOREA ICT Volunteer Team - DIU',
        stage: '2020',
      },
      {
        id:5,
        title: 'Server Administration Including Windows Server Management - BASIS',
        stage: '2022',
      },
    ],
  },
  {
    id:6,
    title: 'experience',
    info: [
      {
        id:7,
        title: 'UX/UI Designer - BugsBD Limited',
        stage: '2023 - Current',
      },
      {
        id:8,
        title: 'Web Developer - BugsBD Limited',
        stage: '2023 - Current',
      },
      {
        id:9,
        title: 'Intern - BugsBD Limited',
        stage: '2022 - 2023',
      },
    ],
  },
  {
    id:10,
    title: 'credentials',
    info: [
      {
        id:11,
        title: 'Bachelor of Science in Software Engineering  - Daffodil International University',
        stage: '18 April 2022',
      },
      {
        id:12,
        title: 'Higher Secondary Certificate, Science - Chowmuhoni Govt.S.A. College',
        stage: '23 July 2017',
      },
      {
        id:13,
        title: 'Secondary School Certificate, Science - Kalikapur Babu Pur High School',
        stage: '17 May 2014',
      },
    ],
  },
];

//components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

//counter
import CountUp from "react-countup";
// import ParticlesContainer from "../../components/ParticlesContainer";


const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-28 text-center xl:text-left">
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-10 font-sans">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center pt-4 xl:text-lg text-base xl:pt-5 mx-auto">
          {/* Full Stack Software Engineer adept in front-end & back-end dev, skilled in HTML, CSS, JavaScript, React, Next.js, databases, API integration, and agile methodologies. Achiever in scalable, user-centric solutions. */}
          <motion.p
            variants={fadeIn('right', 0.4)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-orange-200   ">
          Full Stack Software Engineer adept in front-end & back-end dev, skilled in HTML, CSS, JavaScript, React, Next.js, databases, API integration, and agile methodologies. Achiever in scalable, user-centric solutions.
          </motion.p>
          {/* counters */}
          <motion.div 
            variants={fadeIn('right', 0.6)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
          >
          {/* <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0"> */}
            <div className="hidden md:flex flex-1 xl:gap-x-20 ">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="xl:text-2xl font-bold text-accent/80 mb-2">
                  <CountUp start={0} end={1} duration={8} /> +
                </div>
                <div className="text-xs uppercase xl:text-lg">Years of experience</div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="xl:text-2xl font-bold text-accent/80 mb-2">
                  <CountUp start={0} end={10} duration={8} /> +
                </div>
                {/* clients */}
                <div className="text-xs uppercase xl:text-lg">Satisfied clients</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"  
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex)=> {
              return (
                <div key={itemIndex} 
                className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
                cursor-pointer capitalize xl:text-lg relative after:w-8 
                after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`}
                onClick={()=> setIndex(itemIndex)}
                >
                {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start text-sm xl:text-lg">
            {aboutData[index].info.map((item, itemIndex)=> {
              return(
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/80">
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex)=>{
                    return(
                      <div key={itemIndex} className="text-2xl text-white/80">{icon}</div>
                    );
                  })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
