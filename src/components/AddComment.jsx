import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class AddComment extends Component {
  state = {
    comment: "",
    rate: 1,
    elementId: this.props.id,
  };

  render() {
    return (
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          // inizio fetch
          fetch("https://striveschool-api.herokuapp.com/api/comments/", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTg0OWVkNjgwMjA2ODAwMTUwNGRjNmEiLCJpYXQiOjE3NzAyOTkwOTUsImV4cCI6MTc3MTUwODY5NX0.mwsfhlh6tquVO1ILTyGpGGcoM6tNQAP87Na7vMc7oiQ",
            },
          })
            .then((res) => {
              if (res.ok) {
                console.log("ok");
              } else {
                throw new Error("errore nei dati");
              }
            })
            .catch((err) => {
              console.log("errore", err);
            });
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="write here"
            value={this.state.comment}
            onChange={(e) => {
              this.setState({
                ...this.state,
                comment: e.target.value,
              });
            }}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Select
            aria-label="rate the book"
            value={this.state.rate}
            onChange={(e) => {
              this.setState({
                ...this.state,
                rate: e.target.value,
              });
            }}
          >
            <option>rate the book</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
export default AddComment;
