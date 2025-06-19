'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRef } from 'react';




const Carrossel = () => {

    return (
        <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={1}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            className="h-80 sm:h-100 md:h-130 lg:h-150 xl:h-175"
            // className="h-175"
        >
            <SwiperSlide>
                <img src="/carrossel/1.png" className="w-full h-full object-cover" alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/carrossel/2.png" className="w-full h-full object-cover" alt="Slide 2" />
            </SwiperSlide>
        </Swiper>
    )

}

export default Carrossel