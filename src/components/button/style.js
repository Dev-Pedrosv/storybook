import styled from "styled-components";
import { colors, fontSizes } from "../../style/theme";

export const ButtonStyled = styled.button`
  width: ${(props) => props?.width || "160px"};
  height: ${(props) => props?.height || "44px"};
  padding: ${(props) => props?.padding || "15px 32px"};
  display: ${(props) => props?.display || "block"};
  flex-direction: ${(props) => props?.direction || "column"};
  justify-content: ${(props) => props?.justify || "center"};
  align-items: ${(props) => props?.alignItems || "center"};
  border-radius: ${(props) => props?.radius || "4px"};
  margin: ${(props) => props.margin || "12px"};
  background-color: ${(props) => colors[props?.variant || "primary"]};
  color: ${(props) => colors[props?.color || "light"]};
  font-weight: ${(props) => props?.weight || "500"};
  font-size: ${(props) => fontSizes[props?.size || "normal"]};
  text-align: ${(props) => props?.textAlign || "center"};

  cursor: pointer;
  border: none;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    opacity: ${(props) => props?.hover || "0.8"};
  }
  &:active {
    opacity: ${(props) => props?.active || "0.6"};
  }
`;
