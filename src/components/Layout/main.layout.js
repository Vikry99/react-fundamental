import React from "react";
import Container from "react-bootstrap/Container";
import Navigation from "./navigation.layout";

const MainLayouts = ({ children }) => {
  return (
    <Container fluid={true}>
      <Navigation />
      {children}
    </Container>
  );
};

export default MainLayouts;
