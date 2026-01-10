import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import styles from './swiper.module.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


function SwiperProduct(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
  <Swiper
    style={{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }}
    loop
    watchSlidesProgress
    spaceBetween={10}
    navigation
    thumbs={{ swiper: thumbsSwiper }}
    modules={[FreeMode, Navigation, Thumbs]}
    className={styles.mySwiper2}
  >
    <SwiperSlide>
      <img src={props.primary} />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
    </SwiperSlide>
  </Swiper>

  <Swiper
    onSwiper={setThumbsSwiper}
    loop
    spaceBetween={10}
    slidesPerView={4}
    freeMode
    watchSlidesProgress
    modules={[FreeMode, Navigation, Thumbs]}
    className={styles.mySwiper}
  >
    <SwiperSlide>
      <img src={props.primary} />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
    </SwiperSlide>
  </Swiper>
</>  
  )
}

export default SwiperProduct