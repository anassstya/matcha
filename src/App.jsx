import React from "react";
import Header from "./components/Header.jsx";
import {Container} from "react-bootstrap";
import Products from "./components/Products.jsx";
import About from "./components/About.jsx";
import Contacts from "./components/Contacts.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <Container fluid className="p-0 m-0">
      <Header/>
        <Products/>
        <About/>
      <Contacts/>
        <Footer/>
    </Container>
  );
}