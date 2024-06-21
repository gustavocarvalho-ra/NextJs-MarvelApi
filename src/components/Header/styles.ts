import styled from "styled-components";

export const A = styled.div `
  max-width: 100vw;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #ed1a23;
`

export const Nav = styled.div `
  max-width: 100vw;
  height: 3vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  gap: 2rem;

  a {
    color: #ed1a23;
    font-size: 12.5px;
    text-decoration: none;
    text-transform: lowercase; 
    transition: all .9s;

    &:hover {
      text-decoration: underline;
      scale: 1.2;
    }
  }
`