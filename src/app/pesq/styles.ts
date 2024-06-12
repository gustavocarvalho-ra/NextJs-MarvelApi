import styled from "styled-components";

export const Bg = styled.section `
  max-width: 100vw;
  height: 100%;
  background: #03040a;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  .cardOf {
    width: 90vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .card {
    width: 680px;
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