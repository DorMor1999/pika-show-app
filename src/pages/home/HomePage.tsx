import React, { useContext } from 'react';
import Wrapper from '../../shared/components/UI/Wrapper/Wrapper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IntervalCarousel from '../../shared/components/UI/IntervalCarousel/IntervalCarousel';

import homePhoto1 from '../../shared/assets/home/homePhoto1.jpg';
import homePhoto2 from '../../shared/assets/home/homePhoto2.jpg';
import homePhoto3 from '../../shared/assets/home/homePhoto3.jpg';
import classes from './HomePage.module.css';
import ThemeContext from '../../shared/context/ThemeContext';

const HomePage: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const imagesArray: { src: string; alt: string }[] = [
    { src: homePhoto1, alt: 'home photo 1' },
    { src: homePhoto2, alt: 'home photo 2' },
    { src: homePhoto3, alt: 'home photo 3' },
  ];

  return (
    <Wrapper>
      <div
        className={`bg-${theme} ${theme}-theme ${
          theme === 'light'
            ? classes['div-wrap-row-light']
            : classes['div-wrap-row-dark']
        }`}
        
      >
        <Row>
          <Col md={6} sm={12}>
            <h1>Home Page</h1>
            <p>
              Welcome to our app, your go-to platform for exploring the
              fascinating world of movies and series! Designed for entertainment
              enthusiasts, our app provides a simple and efficient way to access
              detailed information about your favorite films and TV shows.
            </p>
          </Col>
          <Col md={6} sm={12}>
            <IntervalCarousel images={imagesArray} />
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default HomePage;
