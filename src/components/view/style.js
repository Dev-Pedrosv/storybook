import styled from "styled-components";
import { colors } from "../../style/theme";

export const ViewStyled = styled.div`
  width: ${(props) => props?.width || "100%"};
  height: ${(props) => props?.height || "100vh"};
  padding: ${(props) => props?.padding || "20px"};
  display: ${(props) => props?.display || "flex"};
  flex-direction: ${(props) => props?.direction || "column"};
  justify-content: ${(props) => props?.justify || "center"};
  align-items: ${(props) => props?.alignItems || "center"};
  border-radius: ${(props) => props?.radius || "0px"};
  background-color: ${(props) => colors[props?.variant || "gray50"]};
`;
