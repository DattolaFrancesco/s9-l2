import { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class CommentList extends Component {
  render() {
    const { arrayComments } = this.props;
    return (
      <ListGroup>
        {arrayComments.map((b, i) => {
          console.log(b);
          return <ListGroupItem key={i}>{b}</ListGroupItem>;
        })}
      </ListGroup>
    );
  }
}
export default CommentList;
