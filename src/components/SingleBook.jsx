import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleBook = function (props) {
  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={props.imgUrl} />
        <Card.Body className="d-flex flex-column">
          <div className="flex-grow-1">
            <Card.Title>{props.title}</Card.Title>
          </div>

          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
