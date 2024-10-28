import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';

const IntervalCarousel: React.FC<{
  images: { src: string; alt: string }[];
}> = ({ images }) => {
  return (
    <Carousel>
      {images.map((currentImage) => (
        <Carousel.Item interval={2500}>
          <CarouselImage src={currentImage.src} alt={currentImage.alt} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default IntervalCarousel;
