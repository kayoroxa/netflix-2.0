import styled from 'styled-components'

export const ContainerBigPoster = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 25px;

  :hover img {
    transform: scale(1.1);
  }

  img {
    transition: all 0.5s;
    position: absolute;
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .info {
    * {
      box-sizing: border-box;
    }
    /* background: black; */
    /* box sizing */
    color: white;
    position: absolute;
    width: min(40%, 350px);
    height: 100%;
    left: 40px;
    margin: auto;
    /* top: 0; */
    bottom: 15%;
    display: flex;
    flex-direction: column;
    justify-content: end;

    .description {
      font-size: 0.9rem;
    }
    .title {
      font-size: 2.5rem;
    }

    button {
      transition: all 0.2s;
      margin-top: 10px;
      background: rgba(238, 63, 68, 0.8);

      border: none;
      border-radius: 10px;
      padding: 15px 20px;
      color: white;
      width: fit-content;
      cursor: pointer;

      :hover {
        background: rgb(238, 63, 68);
      }
    }
  }

  @media (max-width: 768px) {
    .info {
      width: 100%;
      left: 20px;

      .title {
        font-size: 1rem;
      }

      button {
        padding: 8px 20px;
        font-size: 1rem;
      }
    }
  }
`
