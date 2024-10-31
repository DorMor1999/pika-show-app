import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MyError } from '../../../util/MyError';
import { useNavigate } from 'react-router-dom';
import ThemeContext from '../../../context/ThemeContext';
import classes from './Error.module.css';

type propsPage = {
  error: MyError;
};

const Error: React.FC<propsPage> = ({ error }) => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  function goHomeHandlerBTN(): void {
    navigate('/');
  }

  return (
    <Card className="text-center" bg={theme}>
      <Card.Body>
        <Card.Title className={classes['error-status']}>
          Error status: {error.status}
        </Card.Title>
        <hr
          className={
            theme === 'light'
              ? classes['error-msg-dark']
              : classes['error-msg-light']
          }
        />
        <Card.Text
          className={
            theme === 'light'
              ? classes['error-msg-dark']
              : classes['error-msg-light']
          }
        >
          {error.message}
        </Card.Text>
        <Button
          onClick={goHomeHandlerBTN}
          variant={theme === 'light' ? 'outline-dark' : 'outline-light'}
          size="lg"
        >
          Go Home
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Error;
