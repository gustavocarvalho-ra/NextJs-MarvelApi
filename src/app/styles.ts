import styled from "styled-components";

import back from "../public/back.png"


export const Man = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-image: url("/back.png"); */

  .bac {
    width: 100vw;
    height: 100vh;
    position: relative;

    .bg {
      object-fit: cover;
      z-index: -5;
    }
  }
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

  .hel {
    background-image: url("/nest.png");
  }
`