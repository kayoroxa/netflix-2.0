import styled from 'styled-components'

export const ContainerImagesRandom = styled.div`
  width: 100vw;
  height: 100vh;

  * {
    overflow: hidden;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  .container {
    width: 100%;
    height: 100%;
    display: flex;

    justify-content: center;
    align-items: center;

    > .col {
      flex: 1;
      position: relative;
      height: 100%;
      max-width: 400px;
    }
  }

  .info {
    bottom: 60px;
    /* background: rgba(0, 60, 0, 0.5); */
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    > * {
      padding: 10px;
      color: white;
      font-size: 1.3rem;
      background: rgba(0, 0, 0, 0.5);
    }
  }

  img {
    width: 100%;
    height: 100%;
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;
  }
`
