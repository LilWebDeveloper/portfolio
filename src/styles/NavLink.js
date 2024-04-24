import { styled } from "@mui/material";

export const HeaderButton = styled("button")`
  font-family: system-ui;
  font-size: 1.8rem;
  color: white;
  margin: 1rem;
  border: none;
  background: none;
  &:hover {
    color: #FF9A00;
  };
  @media only screen and (max-width: 1270px) {
    font-size: 1rem;
    margin: 'auto'
  }
  @media only screen and (max-width: 899px) {
    font-size: 1.1rem;
    margin: none
  }
  @media only screen and (max-width: 500px) {
    font-size: 0.85rem;
    margin: none
  }
`;
