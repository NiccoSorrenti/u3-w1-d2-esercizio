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
            <Col xs={12} md={8} lg={3}>
              <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Button variant="primary" className="align-items-baseline">
                    {book.price}€
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
