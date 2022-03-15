import styled from 'styled-components'

export const ContainerCreateSentences = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background: #272a41;

  * {
    font-size: 2rem;
    color: white;
    font-family: 'Roboto', sans-serif;
  }
  .app {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .al {
    padding: 15px;
    border: 3px solid #4a507c;
    border-style: dashed;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .word {
    background: #545a87;
    padding: 5px 13px;
    border-radius: 5px;
    text-align: center;
    text-transform: lowercase;
  }

  button {
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    right: 30px;
    background: #343854;
    border: none;
    border-radius: 5px;
    padding: 10px 100px;
    color: white;
    //SHADOW
    box-shadow: -4px 4px 6px rgba(0, 0, 0, 0.2);
    transition: 0.1s;

    :hover {
      background: #545a87;
      transform: scale(1.05);
    }
  }
`
