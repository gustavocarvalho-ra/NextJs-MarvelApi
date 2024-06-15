import styled from "styled-components";


export const Foo = styled.div `
  width: 100%;
  height: 4vh;
  position: fixed;
  bottom: 0;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #1F0409;

    h3 {
      font-size: 12px;
      font-weight: 400;
      color: white;
    }
  }
`