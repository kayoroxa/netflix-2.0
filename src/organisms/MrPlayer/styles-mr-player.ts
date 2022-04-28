import styled from 'styled-components'

interface IProps {
  isFullScreen: boolean
}

export const ContainerMrPlayer = styled.div<IProps>`
  /* height: ${props => (props.isFullScreen ? '100vh' : '500px')}; */
  width: 600px;
  /* height: 200px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: pink;
  position: relative;

  * {
    box-sizing: border-box;
  }

  .container-video {
    background: blue;
    /* position: absolute; */
    width: ${props => (props.isFullScreen ? '100vw' : '500px')};
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;

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

      .progress-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 5px;
        background: lightBlue;
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
      }

      .fullScreen {
        /* background: pink; */
        svg {
          color: white;
          /* size */
          width: 35px;
          height: 35px;
        }
      }
      .play {
        /* background: pink; */
        overflow: visible;
        svg {
          color: white;
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
