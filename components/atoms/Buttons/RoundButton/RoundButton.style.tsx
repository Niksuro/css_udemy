import styled, { css, keyframes } from "styled-components";

interface variant {
  variant?: string;
}

const moveInDown = keyframes`
 0% { opacity: 0; transform: translateY(30px) }
 100% { opacity: 1; transform: translateY(0px) }
`;

export const Button = styled.a<variant>`
  border-radius: 100px;  
  ${({ variant }) =>
    variant === "white" &&
    css`
      background-color: #fff;
      color: #777;
      animation: ${moveInDown} 1s ease-out .75s;
      animation-fill-mode: backwards;
      &::after {
        background-color: #fff;
      }
    `}
  ${({ variant }) =>
    variant === "green" &&
    css`
      background-color: #0b641f;
      color: #ffffff;
    `}
    &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s
  }
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 15px 40px;
    display: inline-block;
    transition: all 0.2s;
    position: relative;
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    &::after {
    transform: scale(1.5);
    opacity: 0;
  }
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
