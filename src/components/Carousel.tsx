import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import imagen1 from '../images/doggo.png';
import imagen2 from '../images/dog1.png';
import imagen3 from '../images/dog2.png';

const images = [imagen1, imagen2, imagen3];

const Carousel = () => {
  return (
    <div className="w-full h-[500px] mt-16">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true} // Habilita el bucle continuo
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex justify-center items-center relative">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
