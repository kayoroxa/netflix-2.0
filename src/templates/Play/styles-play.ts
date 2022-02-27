import styled from 'styled-components'

export const ContainerPlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .controls--player {
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 600;
    width: 50px;
    height: 50px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s ease;
    background: red;
  }

  .go-back {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 600;
    width: 50px;
    height: 50px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s ease;

    :hover {
      transform: scale(1.3);
    }
    svg {
      width: 100%;
      height: 100%;
      color: white;
      /* contorn */
      stroke: black;
      stroke-width: 0.5px;
      /* stroke-dasharray: 2, 2; */
      stroke-linejoin: round;
    }
  }

  .anti {
    position: relative;
    /* padding-bottom: 56.25%; */
    padding-bottom: 100vh;
    height: 0;
    overflow: hidden;
    background: black;
  }
  .anti iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    z-index: 1;
  }
  .anti::before {
    content: '';
    background-color: black;
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    opacity: 1;
    z-index: 23;
  }
  .container-video {
    position: absolute;
    width: 100%;
  }

  /* on mobile */
  @media (max-width: 768px) {
    /* rotate */
    .container-video {
      transform: rotate(-90deg);
      transform-origin: left top;
      width: 100vh;
      overflow-x: hidden;
      position: absolute;
      top: 100%;
      left: 0;
    }
    .anti {
      padding-bottom: 100vw;
    }
  }
`
