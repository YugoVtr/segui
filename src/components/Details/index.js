import React, { Component } from "react";

import {
  Container,
  TypeTitle,
  TypeDescription,
  TypeImage,
  RequestButton,
  RequestButtonText
} from "./styles";


export default class Details extends Component {
  render() {
    return (
      <Container>
        <TypeTitle>Entrega 1 concluida!</TypeTitle>

        <TypeTitle>Próxima:</TypeTitle>
        <TypeDescription>Serra Dourada</TypeDescription>

        <RequestButton onPress={() => {}}>
          <RequestButtonText>Cancelar</RequestButtonText>
        </RequestButton>
      </Container>
    );
  }
}
