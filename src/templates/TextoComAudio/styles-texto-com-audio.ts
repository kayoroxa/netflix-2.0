import styled from 'styled-components'

export const ContainerTextoComAudio = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #212328;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    color: #efeff0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    -webkit-tap-highlight-color: transparent;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }

  .app {
    width: min(100%, 500px);
    height: 100%;

    display: flex;
    flex-direction: column;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 300px;
    gap: 30px;

    .sentence {
      width: 100%;
      text-align: center;
      color: #7c7e80;
    }

    .sentence-container {
      /* background-color: gray; */
      padding: 10px 20px;
      cursor: pointer;
    }

    .active .sentence {
      color: #efeff0;
    }

    .sentence.en {
      font-size: 20px;
      font-weight: bold;
      /* margin-bottom: 6px; */
    }

    .sentence.pt {
      ::before {
        content: ' ';
        display: inline-block;
        width: 100%;
        height: 2px;
        background-color: rgba(239, 239, 240, 50%);
      }
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
        text-transform: uppercase;
        font-size: 2rem;
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
        cursor: pointer;
        height: 30px;
        width: 30px;

        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          width: 100%;
          height: 100%;
        }
      }

      .active svg {
        fill: #ffb700;
      }

      .play-pause {
        height: 70px;
        width: 70px;
        background: #ffb700;
        border-radius: 50%;
        padding: 3px;

        svg {
          fill: #2f3136;
        }
      }
    }
  }
`
