import styled from 'styled-components'

interface IProps {
  isFullScreen: boolean
}

export const ContainerMrPlayer = styled.div<IProps>`
  /* height: ${props => (props.isFullScreen ? '100vh' : '500px')}; */
  width: min(100vw, 100vh);
  /* height: 200px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: pink;
  position: relative;
  /* border: 2px solid #4a507c; */

  * {
    box-sizing: border-box;
  }

  .container-video {
    background: blue;
    /* position: absolute; */
    width: ${props => (props.isFullScreen ? '100vw' : '500px')};
    padding-bottom: ${props => (props.isFullScreen ? '0' : '56.25%')};
    height: ${props => (props.isFullScreen ? '100vh' : '0')};

    .aviso-video,
    .overlay,
    iframe,
    .thumb {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .aviso-video,
    .thumb {
      display: flex;
      align-items: center;
      justify-content: center;
      background: black;
      color: white;
    }

    .thumb img {
      cursor: pointer;
      width: 100%;
      height: 100%;
      min-width: 100%;
      min-height: 100%;
      /* cover */
      object-fit: cover;
    }

    .overlay {
      display: flex;
      background: none;
      /* align-items: center; */
      /* justify-content: center; */

      :before {
        content: '';
        position: absolute;

        bottom: 0;
        left: 0;
        width: 100%;
        height: ${props => (props.isFullScreen ? '8px' : '5px')};
        background: gray;
        opacity: 0.1;
      }

      .progress-bar {
        position: absolute;
        bottom: 0;
        opacity: 0.5;
        left: 0;
        width: 0%;
        height: ${props => (props.isFullScreen ? '8px' : '5px')};
        background: red;
      }
    }

    .controls {
      width: 100%;
      position: absolute;
      bottom: 5px;
      padding: 0 20px;
      /* right: 10px; */
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      overflow: visible;

      svg {
        cursor: pointer;
        transition: all 0.3s;
        :hover {
          transform: scale(1.2);
        }
        stroke: black;
        stroke-width: 1px;
        opacity: ${props => (props.isFullScreen ? '0.7' : '0.2')};
        color: gray;
      }

      .fullScreen {
        /* background: pink; */
        svg {
          /* size */
          width: 35px;
          height: 35px;
        }
      }
      .play {
        /* background: pink; */
        overflow: visible;
        svg {
          stroke-width: 10px;
          /* size */
          width: 30px;
          height: 30px;
        }
      }

      .retroceder {
        background: blue;
      }
    }
  }

  @media (max-width: 768px) {
  }
`
