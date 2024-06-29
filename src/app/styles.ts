import styled from "styled-components";

export const Bg = styled.div `
  Image {
    object-fit: cover;
    filter: brightness(13%);
    z-index: -100;
  }
` 

export const Man = styled.section `
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 50;

  .bac {
    width: 100%;
    height: 100%;
    z-index: 50;
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
      cursor: default;
      z-index: 5;
  
      h1 {
        color: var(--main-color);
        font-size: 7em;
        font-weight: 900;
  
        span {
          color: #fff;
          font-weight: 900;
        }
      }
    }
  
    .options{
      display: flex;
      gap: 2.5rem;
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