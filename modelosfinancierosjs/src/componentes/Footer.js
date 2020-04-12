import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
render() {
return (
<Footer color="default-color" className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6">
      <h5 className="title">CULTURAEKO</h5>
      <p>
        Here you can use rows and columns here to organize your footer
        content.
      </p>
      </Col>
      <Col md="6">
      <h5 className="title">Talleres y seminarios</h5>
      <ul>
        <li className="list-unstyled">
          <a href="#!">Link 1</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 2</a>
        </li>
      </ul>
      </Col>
    </Row>
  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="https://www.culturaeko.com"> Culturaeko.com </a>
    </Container>
  </div>
</Footer>
);
}
}

export default FooterPage;