import styled from "styled-components";

export const A = styled.div `
  max-width: 100vw;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: var(--main-color);
`

export const Nav = styled.div `
  max-width: 100vw;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  gap: 2rem;

  a {
    background: var(--main-color);
    font-size: 12.5px;
    text-decoration: none;
    text-transform: lowercase; 
    transition: all .9s;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      height: 2px;
      width: 100%;
      border-radius: 25px;
      transform: scaleX(0);
      background: var(--main-color);
      transform-origin: right;
      transition: transform 0.6s ease;
    }

    &:hover:before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`