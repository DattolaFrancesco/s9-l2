import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import libri from "../../public/books/fantasy.json";

function Books() {
  return libri.map((e, i) => {
    return (
      <Col xs={6} sm={6} md={4} lg={3} key={i}>
        <Card>
          <div>
            <Card.Img variant="top" src={e.img} style={{ maxHeight: "15rem", objectFit: "cover" }} />
          </div>
          <Card.Body>
            <Card.Title>{test}...</Card.Title>
            <Card.Text>{e.price}</Card.Text>
            <Button variant="primary">BUY</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });
}

export default Books;
