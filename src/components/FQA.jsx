import React from "react";
import { Accordion, Container } from "react-bootstrap";

export default function FQA() {
  return (
    <section className="question py-5">
      <Container>
        <h1 className="h3 text-center mb-4">Frequently Asked Questions</h1>
        <Accordion flush>
          {Array.from({ length: 5 }).map((_, idx) => (
            <Accordion.Item eventKey={idx + 1} key={idx * Math.random()}>
              <Accordion.Header>Accordion Item #{idx + 1}</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
