import styled from 'styled-components'

export const ContainerMemori = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;

  .container {
    width: 100%;
    height: 80vh;
    /* min-height: 100vh; */
    /* background: pink; */
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    /* align-items: end */
    align-items: center;
    justify-content: space-between;
    /* gap: 60vw; */

    /* children 1 */
  }

  font-family: 'Roboto', sans-serif;
  font-size: 20px;

  p {
    display: flex;
    gap: 0.3rem;

    span {
      background: #3b5998;
      padding: 0.5vw;
      color: white;
    }
  }
`
