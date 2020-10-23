import React from "react";
import { Container,Inner } from "./styles/Jumbotron";
export default function Jumbotron({children, direction='row',...resProps}) {
  return (
    <Inner direction={direction}>
     {children}
    </Inner>
  );
}
Jumbotron.Container= function JumbotronContainer({ children, ...restProps}){
  return <Container {...restProps}>{children}</Container>
}

