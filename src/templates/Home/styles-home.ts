import styled from 'styled-components'

export const ContainerHome = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  width: 100vw;
  background-color: lightgray;

  font-family: 'Roboto', sans-serif;
  display: flex;
  /* box-sizing: border-box; */

  .left {
    width: 75%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 15px;
  }

  .right {
    width: 25%;
    min-height: 97vh;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 20px;
    display: flex;
    margin: 10px;
    flex-direction: column;
    gap: 20px;
    background-color: orange;
  }
`
