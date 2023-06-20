import { Swiper, SwiperSlide } from 'swiper/react';

import { Container } from './styles';

export default function Slider({ info, title }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={'auto'}
        className="swiper"
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>{item.original_title}</SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
