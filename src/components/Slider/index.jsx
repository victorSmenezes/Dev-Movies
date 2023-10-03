import { Swiper, SwiperSlide } from 'swiper/react';

import Card from '../Card';
import { Container } from './styles';

export default function Slider({ info, title, route }) {
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
          <SwiperSlide key={index}>
            <Card item={item} route={route} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
