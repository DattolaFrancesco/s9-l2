import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Component } from "react";

function SingleBook(props) {
  const test = props.test.title.slice(0, 13);
  return (
    <Col xs={6} sm={6} md={4} lg={3} className={props.display}>
      <Card>
        <div>
          <Card.Img variant="top" src={props.test.img} style={{ maxHeight: "15rem", objectFit: "cover" }} />
        </div>
        <Card.Body>
          <Card.Title>{test}...</Card.Title>
          <Card.Text>{props.test.price}</Card.Text>
          <Button variant="primary">BUY</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;
