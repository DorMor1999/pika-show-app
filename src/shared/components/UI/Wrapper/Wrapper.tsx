import React from 'react';

import Container from 'react-bootstrap/Container';
import classes from './Wrapper.module.css';

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <Container className={classes.wrapper}>
        {children}
      </Container>
    );
  };

export default Wrapper;