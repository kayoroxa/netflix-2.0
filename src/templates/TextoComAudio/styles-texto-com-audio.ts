import styled from 'styled-components'

export const ContainerTextoComAudio = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #212328;

  * {
    color: #efeff0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  .app {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 150px;
    gap: 20px;

    .sentence {
      width: 100%;
      text-align: center;
      color: #7c7e80;
    }

    .sentence-container {
      /* background-color: gray; */
      padding: 10px 20px;
    }

    .active .sentence {
      color: #efeff0;
    }

    .sentence.en {
      font-size: 20px;
      font-weight: bold;

      ::after {
        content: ' ';
        display: block;
        width: 100%;
        height: 2px;
        background-color: rgba(239, 239, 240, 50%);
      }
    }

    .sentence.pt {
      font-size: 18px;
    }
  }

  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    padding-top: 100px;
    /* height: 50px; */
    background: rgb(33, 35, 40);
    background: linear-gradient(
      0deg,
      rgba(33, 35, 40, 1) 0%,
      rgba(33, 35, 40, 1) 70%,
      rgba(33, 35, 40, 0) 100%
    );

    display: flex;
    flex-direction: column;
    gap: 20px;

    .photo-title {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;

      .img-container {
        width: 60px;
        height: 60px;
        overflow: hidden;
        border-radius: 50%;

        img {
          width: 100%;
          height: 100%;
          min-width: 100%;
          min-height: 100%;
          object-fit: cover;
        }
      }
      .title {
        font-size: 2.5rem;
        font-weight: bold;
        text-align: center;
        padding: 0.1rem 0px;
      }
    }

    .player {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 30px;

      > * {
        height: 40px;
        width: 40px;

        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          width: 100%;
          height: 100%;
        }
      }

      .play-pause {
        height: 70px;
        width: 70px;
        background: #ffb700;
        border-radius: 50%;

        svg {
          fill: #2f3136;
        }
      }
    }
  }
`
