import { TypographyStyled } from "./style";
import React from "react";

const Typography = ({ children, ...props }) => {
  return <TypographyStyled {...props}>{children}</TypographyStyled>;
};

export default Typography;
