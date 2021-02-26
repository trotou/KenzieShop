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

export const BoxCardOut = styled.div`
  width: 60%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.8%;
  color: black;
  font-size: 1rem;
  border-radius: 2%;
  padding: 1%;
  margin-right: 10%;
`;

export const BoxCardInn = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 90%;
`;
