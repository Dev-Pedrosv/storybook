import { ViewStyled } from "./style";
import React from "react";

const View = ({ children, ...props }) => {
  return <ViewStyled {...props}>{children}</ViewStyled>;
};

export default View;
