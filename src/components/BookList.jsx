import { Component } from 'react';
import fantasy from '../data/fantasy.json';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SingleBook from './SingleBook';

class BookList extends Component {
  render() {
    return (
      <Container>
        <Row>
          {fantasy.map((book) => {
            return (
              <SingleBook
                title={book.title}
                imgUrl={book.img}
                description={book.category}
              />
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;
