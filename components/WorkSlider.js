// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
          path1: 'https://fakrulswe.github.io/Quiz-hero/'
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          path1: 'https://rainbow-muffin-5a569a.netlify.app/'
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          path1: 'https://fakrulswe.github.io/phone-hunter-API/'
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
          path1: 'https://64e50911c8596518d3609259--sparkly-cendol-12980e.netlify.app/'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
          path1: 'https://fakrulswe.github.io/baap-er-bank/'
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
          path1: 'https://fakrulswe.github.io/pin-matcher/'
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          path1: 'https://fakrulswe.github.io/shopping_cart/'
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          path1: 'https://fakrulswe.github.io/temperature-city/'
        },
      ],
    },
  ],
};

////////////////

//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';
import Link from 'next/link';

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper';

//icons
import { BsArrowRight } from 'react-icons/bs';
//next image
import Image from 'next/image';



const WorkSlider = () => {
  return (
    <Swiper 
    spaceBetween={10}
      pagination = {{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {
        workSlides.slides.map((slide, index)=> {
          return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                {slide.images.map((image, index)=> {
                  return (
                    <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                      <div className='flex items-center justify-center relative overflow-hidden group'>
                        {/* image */}
                        <Image src={image.path} width={500} height={300} alt='' />
                        {/* overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                      <Link href={`${image.path1}`}>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part 1 */}
                          <div className='delay-100'>
                            LIVE
                          </div>
                          {/* title part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            PROJECT
                          </div>
                          {/* icon */}
                          <div className='text-xl translate-y-[500] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight/></div>
                        </div>
                      </Link>
                      </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default WorkSlider;

