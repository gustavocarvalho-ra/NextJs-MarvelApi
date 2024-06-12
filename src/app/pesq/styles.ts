import styled from "styled-components";

export const Bg = styled.section `
  max-width: 100vw;
  height: 130vh;
  background: #03040a;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;


  .card {
    width: 800px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 8px;
    background-color: #04091f;


    img {
      width: 180px;
      height: 180px;
      border-radius: 8px;
    }

    .nam {
      color: wheat;
    }
  }
`