import styled from "styled-components";

export const Bg = styled.section `
  max-width: 100vw;
  min-height: 90vh;
  background: #03040a;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`

export const BgFix = styled.div `
  width: 90vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;
  margin: 2rem 0;

  .inPut {
    width: 100%;
    height: 3vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .h3 {
      color: #fff;
    }
    
    .inp {
      width: 180px;
      margin-left: 1em;
    }
  }

  .card {
    width: 750px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 8px;
    background-color: #04091f;

    .imge{
      width: 180px;
      height: 180px;
      display: flex;
      justify-content: center;
      border-radius: 8px;
      margin-left: 1.5rem;

      img {
        width: 180px;
        height: 180px;
        border-radius: 8px;
      }
    }

    .desc{
      height: 100%;
      display: flex;
      color: #d7d7d7;
      flex-direction: column;
      gap: 1rem;
      margin-left: 1.5rem;

      span {
        color: red;
        font-weight: 400;
      }

      .nam {
        top: 1rem;
        position: relative;
        margin-bottom: 1.7rem;
      }

      .description{
        font-size: 12px;
      }
    }
  }
`