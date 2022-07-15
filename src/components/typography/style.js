import styled from "styled-components";
import { colors, fontSizes } from "../../style/theme";

export const TypographyStyled = styled.h1`
  display: ${(props) => props?.display || "block"};
  border: ${(props) => props?.border || "none"};
  border-radius: ${(props) => props?.radius || "0px"};
  margin: ${(props) => props.margin || "0px"};
  background-color: ${(props) => colors[props?.variant] || "transparent"};
  color: ${(props) => colors[props?.color || "black"]};
  font-weight: ${(props) => props?.weight || "500"};
  font-size: ${(props) => fontSizes[props?.size || "normal"]};
  text-align: ${(props) => props?.textAlign || ""};
  text-decoration: ${(props) => props?.decoration || ""};
`;
