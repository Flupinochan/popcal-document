import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperSection = () => {
  return (
    <Swiper
      spaceBetween={64}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      style={{ width: 480, padding: "0px 50px 30px 50px", userSelect: "none" }}
      navigation={true}
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
    >
      {Array.from({ length: 8 }, (_, i) => {
        const imagePath = `img/swiper/${i + 1}.png`;
        return (
          <SwiperSlide key={imagePath}>
            <img src={imagePath} alt={`Slide ${i + 1}`} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperSection;
