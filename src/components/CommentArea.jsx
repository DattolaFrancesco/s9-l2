import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    commento: [],
  };
  getComments = () => {
    const { bookId } = this.props;
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTg0OWVkNjgwMjA2ODAwMTUwNGRjNmEiLCJpYXQiOjE3NzAyOTkwOTUsImV4cCI6MTc3MTUwODY5NX0.mwsfhlh6tquVO1ILTyGpGGcoM6tNQAP87Na7vMc7oiQ",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else throw new Error("errore nel caricamento dati");
      })
      .then((data) => {
        console.log(data);
        this.setState({
          commento: data.map((c) => {
            return `${c.comment}- rate:${c.rate}`;
          }),
        });
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };
  componentDidMount() {
    this.getComments();
  }
  render() {
    const { bookId } = this.props;
    console.log(this.state.commento);
    return (
      <>
        <CommentList arrayComments={this.state.commento}></CommentList>
        <AddComment id={bookId}></AddComment>
      </>
    );
  }
}
export default CommentArea;
