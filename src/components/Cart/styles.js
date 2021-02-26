import styled from "styled-components";
import { Card } from "@material-ui/core";

export const CardTotal = styled(Card)`
  width: 30%;
  height: 20%;
  position: absolute;
  transform: translate(220%, 40%);
`;

export const BoxCart = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
`;

export const BoxCartInside = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 7% 10%;
`;
