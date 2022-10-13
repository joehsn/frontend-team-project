import { ThemeProvider } from "react-bootstrap";

import "./App.css";
import {
  Boxes,
  Contact,
  Footer,
  FQA,
  Hero,
  Instructors,
  Learn,
  Navbar,
  Newsletter,
} from "./components";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <Newsletter />
      <Boxes />
      <Learn
        bg="dark"
        text="light"
        invert="-reverse"
        btn="light"
        title="See What is new!"
        link="Go now"
      />
      <Learn />
      <Learn
        bg="dark"
        text="light"
        invert="-reverse"
        btn="light"
        title="Explore our new plans!"
      />
      <FQA />
      <Instructors />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
