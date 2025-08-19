// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../swipper/swipper.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import BannerComplete from '../../assets/images/banner-complete.png'
import BannerMinusButton from '../../assets/images/banner-minus-button.png'
import BannerMinusText from '../../assets/images/banner-minus-text.png'

function Slider(){

    return(
       <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={BannerComplete} alt="banner promocional" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BannerMinusButton} alt="banner promocional" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BannerMinusText} alt="banner promocional" />
          </SwiperSlide>
         
        </Swiper>
    </>
    );
}



export default Slider;