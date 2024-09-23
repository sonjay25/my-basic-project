
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import naruto from './assets/image/naruto.jpg'

import { Navigation, Pagination } from 'swiper/modules'; // Correct module import

const Carousel = () => (
  <div className='container mx-auto'>
    <Swiper
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    modules={[Navigation, Pagination]} // Using Navigation and Pagination modules
  >
    <SwiperSlide>
      <img src={naruto} alt="Slide 1" className="w-full" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={naruto} alt=' Slide 2 ' className="w-full" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={naruto} alt="Slide 3" className="w-full" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={naruto} alt="Slide 4" className="w-full" />
    </SwiperSlide>
  </Swiper>
  </div>
);

export default Carousel;
