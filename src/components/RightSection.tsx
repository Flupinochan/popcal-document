import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../css/swiper-section.module.scss";

const RightSection = () => {
  return (
    <Swiper
      className={styles.swiperContainer}
      spaceBetween={64}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={800}
      effect="slide"
    >
      {Array.from({ length: 8 }, (_, i) => {
        const imagePath = `img/swiper/${i + 1}.png`;
        return (
          <SwiperSlide key={imagePath} className={styles.swiperSlide}>
            <img src={imagePath} alt={`Slide ${i + 1}`} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default RightSection;
