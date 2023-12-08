import React from "react";
import { doctorData } from "../helper/data";
import CardDoctor from "./CardDoctor";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Doctors = () => {
  return (
    <Container>
      <h3>Our Doctors</h3>
      <Row className="g-4">
        {doctorData.map((data) => (
          <Col key={data.id} >
            <CardDoctor data={data} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Doctors;
