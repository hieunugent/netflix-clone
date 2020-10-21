import React from "react";
import {Inner} from './styles/Jumbotron'
export default function Jumbotron({children, direction='row',...resProps}) {
  return (
    <Inner direction={direction}>
      <p>Hello again</p>
    </Inner>
  );
}


