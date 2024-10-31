import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import classes from './MySpinner.module.css';

const MySpinner: React.FC = () => {
  return (
    <div className={classes.overlay}>
      <Spinner animation="border" variant="dark" />
    </div>
  );
};

export default MySpinner;
