import { Col, Container, Row } from 'react-bootstrap';
import fantasy from '../data/fantasy.json';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AllTheBooks = function () {
  return (
    <Container>
      <Row className="g-2 justify-content-between">
        {fantasy.map((book) => {
          return (
            <Card className="w-25">
              <Card.Img variant="top" className="w-100 h-100" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Button variant="primary" className="align-items-baseline">
                  {book.price}€
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
