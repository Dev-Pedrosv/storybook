import { ButtonStyled } from "./style";
import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <ButtonStyled {...props} variant={props.variant}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
