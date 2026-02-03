import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navigazione from "./components/navbar";
import Footer from "./components/footer";
import Alert1 from "./components/alert";
import Books from "./components/AllTheBooks";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Container fluid className="p-0">
        <Navigazione />
        <Alert1 />
        <Container>
          <Row className="g-3">
            <Books />
          </Row>
        </Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
