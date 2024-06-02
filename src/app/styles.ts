import styled from "styled-components";


export const Man = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .bac {
    width: 100vw;
    height: 100vh;
    position: relative;

    .bg {
      object-fit: cover;
      filter: brightness(19%);
      z-index: -5;
    }
  }

  .container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      color: red;

      span {
        color: #fff;
      }
    }
    .bt {
      width: 200px;
      height: 50px;
    }
  
  }
`