import styled from "styled-components";

export const Bg = styled.section `
  max-width: 100vw;
  height: 130vh;
  background: #03040a;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;


  .card {
    width: 230px;
    height: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: #04091f;


    img {
      width: 220px;
      height: 220px;
      border-radius: 8px;
    }

    .nam {
      color: wheat;
    }
  }
`