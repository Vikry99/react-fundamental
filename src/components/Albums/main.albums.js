// children component
import React from "react";
import Container from "react-bootstrap/Container";
import Collection from "./collection.albums";

const Albums = (props) => {
  return (
    <React.Fragment>
      <Container className="mt-2">
        <h3>{props.title}</h3>
        <i>{props.desc}</i>
        <Collection />
      </Container>
    </React.Fragment>
  );
};

export default Albums;
