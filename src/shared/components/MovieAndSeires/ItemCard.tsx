import React, { useContext } from 'react';
import { Movie, Series } from '../../util/types';
import Card from 'react-bootstrap/Card';
import ThemeContext from '../../context/ThemeContext';
import classes from './ItemCard.module.css';

type propsPage = {
  title: string;
  item: Movie | Series;
};

const ItemCard: React.FC<propsPage> = ({ title, item }) => {
  const { theme } = useContext(ThemeContext);

  const textClassName: string =
    theme === 'light' ? classes['text-dark'] : classes['text-light'];

  return (
    <Card bg={theme} className={classes.card}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w1280${item.posterPath}`}
      />
      <Card.Body>
        <Card.Title className={textClassName}>{item.title}</Card.Title>
        <Card.Text className={textClassName}>
          Language: {item.language}
        </Card.Text>
        <Card.Text className={textClassName}>
          Release Date: {item.releaseDate}
        </Card.Text>
        <Card.Text className={textClassName}>
          Vote Average: {item.voteAverage.toFixed(1)}
        </Card.Text>
        <Card.Text className={textClassName}>
          {item.isAdult ? 'For adults' : 'For everyone'}
        </Card.Text>
        <hr />
        <Card.Text className={textClassName}>{item.overview}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
