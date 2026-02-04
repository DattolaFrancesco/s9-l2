import libri from "../public/books/fantasy.json";
import SingleBook from "./components/singleBook";
import Form from "react-bootstrap/Form";
import { Component } from "react";

class GroupBooks extends Component {
  state = {
    title: "",
  };
  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Books Title"
              value={this.state.title}
              onChange={(e) => {
                this.setState({
                  title: e.target.value,
                });
              }}
            />
          </Form.Group>
        </Form>
        {libri.map((b) => {
          let search = b.title.toLowerCase();
          if (!search.includes(this.state.title)) {
            return <SingleBook display={"none"} test={b} key={b.asin} />;
          } else {
            return <SingleBook test={b} key={b.asin} />;
          }
        })}
      </>
    );
  }
}
export default GroupBooks;
