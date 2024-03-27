import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import frontpage from '@/assets/sliderTemp/frontpage.png';
import frontpage2 from '@/assets/sliderTemp/main1.jpg'
import frontpage3 from '@/assets/sliderTemp/main.jpg'
import './homeslider.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay, EffectFade } from 'swiper/modules';

const HomeSlider = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
    }, []);

    const banners = [
        {
            imgUrl: frontpage
        },
        {
            imgUrl: frontpage2
        },
    
        {
            imgUrl: frontpage3
        }
    ];

    return (
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            autoplay={{ delay: 2000 }} 
            effect="fade" 
            fadeEffect={{ crossFade: true }}
            className="mySwiper"
        >
            {banners.map((banner, index) => (
                <SwiperSlide key={index}>
                    <Image className='image' src={banner.imgUrl} alt="" width={width} height={100} style={{ objectFit: "cover" }} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HomeSlider;
