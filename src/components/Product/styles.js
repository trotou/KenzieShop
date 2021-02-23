import styled from "styled-components";
import { Card, Button, CardMedia } from "@material-ui/core";

export const CardProduct = styled(Card)`
  width: 20%;
  height: 90%;
  margin: 3%;
`;

export const ButtonProduct = styled(Button)`
  background-color: lightblue;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  width: 50%;
`;

export const CardImage = styled(CardMedia)`
  height: 100%;
  padding-top: 56%;
`;
