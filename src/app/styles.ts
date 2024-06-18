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
      filter: brightness(13%);
      z-index: -5;
    }
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .title {
      height: 30vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
  
      h1 {
        color: red;
        font-size: 7em;
  
        span {
          color: #fff;
        }
      }
    }
  
    .options{
      display: flex;
      .hel {
        width: 250px;
        height: 100px;
        align-content: center;
        justify-content: center;
        
        button {
          width: 100%;
          height: 100%;
          color: #fff;
          font-size: 2em;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.05);
          filter: blur(0.1px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 16px;
          cursor: pointer;
          transition: all .6s;

          &:hover {
            opacity: .5;
          }
        }
      }
    }
  }
`