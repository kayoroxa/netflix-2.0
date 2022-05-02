import styled from 'styled-components'

export const ContainerCreateSentences = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background: #272a41;

  * {
    font-size: 1.3rem;
    color: white;
    font-family: 'Roboto', sans-serif;
    transition: all 0.3s ease-in-out;
  }
  .app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .flow-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .al {
    padding: 15px;
    border: 3px solid #4a507c;
    border-style: dashed;
    max-height: 85vh;
    flex-direction: column;

    :hover {
      border-color: white;
    }
  }

  .al-inside {
    min-height: 100%;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    gap: 10px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
  }

  .word {
    overflow: auto;
    background: #545a87;
    padding: 5px 13px;
    border-radius: 5px;
    text-align: center;
    text-transform: lowercase;
    overflow: hidden;

    :hover {
      background: pink;
    }
  }

  .word.small {
    font-size: 0.8rem;
  }

  button {
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    right: 30px;
    background: #343854;
    border: none;
    border-radius: 5px;
    padding: 10px 40px;
    color: white;
    //SHADOW
    box-shadow: -4px 4px 6px rgba(0, 0, 0, 0.2);
    transition: 0.1s;

    :hover {
      background: #545a87;
      transform: scale(1.05);
    }
  }

  .emphasis {
    background: white;
    color: black;
  }
`
