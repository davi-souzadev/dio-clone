import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
  background: #565656;
  border-radius: 1.375rem;
  position: relative;

  color: #fff;
  padding: 0.125rem .75rem;
  min-width: 7.5rem;
  width: 100%;
  cursor: pointer;

  ${({ variant }) => variant !== "primary" && css`
    min-width: 10.438rem;
    height: 2.063rem;

    background: #E4105D;

    &:hover {
      filter: brightness(1.3);
    } 

    &::after {
      content: "";
      position: absolute;
      border: 1px solid #E4105D;
      top: -6px;
      left: -6px;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      border-radius: 1.375rem;
    }
  `}
`