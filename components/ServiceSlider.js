//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

//import required modules
import { FreeMode, Pagination } from 'swiper';

// Service data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Creating a strong software brand for developers involves a mix of technical prowess, user experience, and a distinct brand identity.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Throughout these tasks, collaboration, documentation, and iteration are crucial. Regular communication with stakeholders, flexibility to adapt to changing requirements, and a commitment to quality are essential for successful software design.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Software development tasks encompass a wide range of activities involved in creating, maintaining, and improving software applications.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: "Effective software copywriting is crucial for enhancing user experience, guiding users through the software, and effectively communicating the software's value and features. It requires a blend of creativity, clarity, and an understanding of the target audience.",
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'In software development, SEO (Search Engine Optimization) tasks optimize the visibility and ranking of software-related websites, content, or applications in search engine results.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
    
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
    
      }}
      freeMode = {true}
      pagination = {{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {
        serviceData.map((item, index)=> {
          return (
            <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>

              </div>
            </div>
          </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default ServiceSlider;
