import styled from "styled-components";

export const Bg = styled.div `
  Image {
    object-fit: cover;
    filter: brightness(13%);
    z-index: -100;
  }
` 

export const Man = styled.div `
  .bac {
  }
  .content {
    .title {
      h1 {
        span {
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