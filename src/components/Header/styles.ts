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
  background: yellow;
  gap: 2rem;

  a {
    color: #1F0409;
    font-size: 12.5px;
    text-decoration: none;
    text-transform: lowercase; 
    transition: all .5s;

    &:hover {
      text-decoration: underline;
    }
  }
`