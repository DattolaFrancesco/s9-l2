import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const { test, display } = this.props;
    const titleShort = test.title.slice(0, 13);
    return (
      <Col xs={6} sm={6} md={4} lg={3} className={display}>
        <Card>
          <div>
            <Card.Img
              onClick={() => {
                if (!this.state.selected) {
                  this.setState({
                    selected: true,
                  });
                } else {
                  this.setState({
                    selected: false,
                  });
                }
              }}
              variant="top"
              src={test.img}
              style={{ maxHeight: "15rem", objectFit: "cover" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{titleShort}...</Card.Title>
            <Card.Text>{test.price}</Card.Text>
            <Button variant="primary">BUY</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
