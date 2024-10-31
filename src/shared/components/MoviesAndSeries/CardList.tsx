import React, { useContext } from 'react';
import { Movie, Series } from '../../util/types';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ThemeContext from '../../context/ThemeContext';
import classes from './CardList.module.css';
import { useNavigate } from 'react-router-dom';

type propsPage = {
  title: string;
  dataList: Movie[] | Series[];
};

const CardList: React.FC<propsPage> = ({ title, dataList }) => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const textClassName: string =
    theme === 'light' ? classes['text-dark'] : classes['text-light'];

  function goToItemPage(itemId: number): void {
    const pathBegin: string = title === 'Movies' ? '/movies' : '/series';
    navigate(`${pathBegin}/${itemId}`);
  }

  return (
    <Row xs={1} md={2} className="g-4">
      {dataList.map((curItem: Movie | Series) => (
        <Col key={curItem.id}>
          <Card bg={theme}>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w1280${curItem.posterPath}`}
            />
            <Card.Body>
              <Card.Title className={textClassName}>{curItem.title}</Card.Title>
              <Card.Text className={textClassName}>
                Language: {curItem.language}
              </Card.Text>
              <Card.Text className={textClassName}>
                Release Date: {curItem.releaseDate}
              </Card.Text>
              <Card.Text className={textClassName}>
                Vote Average: {curItem.voteAverage.toFixed(1)}
              </Card.Text>
              <Card.Text className={textClassName}>
                {curItem.isAdult ? 'For adults' : 'For everyone'}
              </Card.Text>
              <hr />
              <div className="d-grid gap-2">
                <Button
                  variant={theme === 'light' ? 'outline-dark' : 'outline-light'}
                  size="lg"
                  onClick={() => goToItemPage(curItem.id)}
                >
                  Read More
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardList;
