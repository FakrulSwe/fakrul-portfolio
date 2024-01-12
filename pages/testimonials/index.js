//components
import TestimonialSlider from '../../components/TestimonialSlider';

//framer motion
import { motion } from 'framer-motion';
import {fadeIn} from '../../variants';

const Testimonials = () => {
  return (
    <div className='h-full bg-primary/30 py-32 text-center'>
      <div className='container mx-auto h-full flex flex-col justify-center'>
        {/*  */}
        <motion.h2 
         variants={fadeIn('up', 0.2)} 
         initial="hidden" 
         animate='show' 
         exit='hidden' 
         className='font-bold xl:h2 mb-8 mt-4 xl:mb-0 pt-14'
        >
          What clients <span className='text-accent'>say.</span>
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn('up', 0.4)} 
          initial="hidden" 
          animate='show' 
          exit='hidden' 
        >
          <TestimonialSlider/>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
