import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";

function BasicExample() {
  const [toggle, setToggle] = useState(false);
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      expanded={toggle}
      className="py-3"
    >
      <Container className="position-relative">
        <Navbar.Brand href="/">FRONTEND</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="menu"
          onClick={() => {
            setToggle(toggle ? false : true);
          }}
          className={`d-flex d-md-none justify-content-center align-items-center bg-${
            toggle ? "secondary" : "dark"
          } text-${toggle ? "light" : "secondary"}`}
        >
          {toggle ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>
        <Navbar.Collapse id="menu">
          <Nav className="ms-auto">
            {["Learn", "Questions", "Plan", "About US"].map((link, index) => (
              <Nav.Link
                key={index}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                onClick={() => {
                  setToggle(false);
                }}
              >
                {link}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
