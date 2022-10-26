import styled, { css, keyframes } from "styled-components";

interface variant {
  variant?: string;
}

const moveInDown = keyframes`
 0% { opacity: 0; transform: translateY(3rem) }
 100% { opacity: 1; transform: translateY(0rem) }
`;

export const Button = styled.a<variant>`
  border-radius: 10rem;  
  font-size: 1.6rem;
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
    border-radius: 10rem;
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
    padding: 1.5rem 4rem;
    display: inline-block;
    transition: all 0.2s;
    position: relative;
  }
  &:hover {
    transform: translateY(-.3rem);
    box-shadow: 0 1rem, 2rem rgba(0, 0, 0, 0.2);
    &::after {
    transform: scale(1.5);
    opacity: 0;
  }
  }
  &:active {
    transform: translateY(-.1rem);
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;
