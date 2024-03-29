// Next Image
import Image from "next/image";

//framer motion
import {motion} from 'framer-motion';

//variants
import { fadeIn } from '../variants';

//components
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import ParticlesContainer from '../components/ParticlesContainer';


const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
    {/* text */}
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
        {/* title */}
        <motion.h1 
          variants={fadeIn('down', 0.2)} 
          initial='hidden'
          animate='show'
          exit='hidden'
          className="text-xl xl:text-5xl xl:h2 pt-16 xl:pb-3 md:text-4xl md:pb-3"
          >
          Transforming Ideas <br/> Into {' '} <span className="text-amber-400">Software</span>
        </motion.h1>
        {/* Subtitle */}
        <motion.p
          variants={fadeIn('down', 0.3)} 
          initial='hidden'
          animate='show'
          exit='hidden'
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 text-sm pt-5 xl:pt-0"
          >
          As a software engineer, I am passionate about designing and developing software systems that solve complex problems and deliver value to end-users. With 1 year of experience, I have honed my skills in various programming languages including HTML, CSS, Bootstrap, Tailwind, JavaScript, C, Java, and frameworks React.js. I am committed to showing my skills for reliable, scalable, and user-friendly software.
        </motion.p>
        {/* btn */}
        <div className="flex justify-center xl:hidden relative">
          <ProjectsBtn />
        </div>
        <motion.div 
          variants={fadeIn('down', 0.4)} 
          initial='hidden'
          animate='show'
          exit='hidden'
          className="hidden xl:flex"
        >
          <ProjectsBtn />
        </motion.div>
      </div>
    </div>
    {/* image */}
    <div className="w-[1200px] h-full absolute right-0 bottom-0">
      {/* bg image */}
      <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
      {/* particales */}
      <ParticlesContainer />
      {/* avatar image */}
      <motion.div 
          variants={fadeIn('up', 0.5)} 
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{duration:1, ease: 'easeInOut'}}
          className="w-full h-full max-w-[637px] max-h-[578px] absolute -bottom-32 lg:bottom-0 lg:right-[10%]">
        <Avatar />
      </motion.div>
    </div>
    </div>
  );
};

export default Home;
