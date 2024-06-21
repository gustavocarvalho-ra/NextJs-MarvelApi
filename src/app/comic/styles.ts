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
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2rem;

  .inPut {
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;
    
    .h3 {
      color: #fff;
      font-size: 22px;
      cursor: default;
    }
    
    .inp {
      width: 180px;
      height: 2rem;
      text-align: center;
      color: #fff;
      font-size: 14px;
      text-transform: uppercase;
      background-color: rgba(255, 255, 255, 0.09);
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 8px;
      margin: 10px 0 1rem 0;
    }
  }

  .card {
    width: 250px;
    height: 370px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 8px;
    background-color: #04091f;

    .imge{
      width: 180px;
      height: 220px;
      display: flex;
      justify-content: center;
      border-radius: 8px;
      margin-top: 1rem;

      img {
        width: 180px;
        height: 220px;
        border-radius: 8px;
      }
    }

    .desc{
      width: 80%;
      height: 90%;
      display: flex;
      align-items: center;
      color: #d7d7d7;
      flex-direction: column;
      gap: 2rem;

      span {
        color: red;
        font-weight: 400;
      }

      .nam {
        top: 1rem;
        position: relative;
        /* margin-bottom: 1.7rem; */
        font-size: 14px;
        margin: 0, 1rem, 1.7rem, 1rem;
      }

      .variant{
        font-size: 12px;
      }
    }
  }
`