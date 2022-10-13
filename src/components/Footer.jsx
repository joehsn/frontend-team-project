import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaChevronUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-4 text-center text-light bg-dark">
      <Container>
        <Row>
          <Col
            sm={10}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="h6">Copyright &copy; 2022 FRONTEND</div>
          </Col>
          <Col sm={2}>
            <Button
              aria-label="To Top scroll button"
              variant="primary"
              className="scroll-btn rounded-circle mx-auto mx-sm-0"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <FaChevronUp />
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
