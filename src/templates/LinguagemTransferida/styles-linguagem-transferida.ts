import styled from 'styled-components'

export const ContainerLinguagemTransferida = styled.div`
  width: 90vw;
  max-width: 900px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: visible;

  * {
    font-family: 'Roboto', sans-serif;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  span {
    margin: 0px 5px;
  }
  .head-line {
    width: 100%;
    text-align: center;
    padding: 30px 0px;
    font-size: 2rem;

    b {
      font-weight: 600;
    }

    span {
      font-weight: 600;
      color: white;
      background: black;
      padding: 1px 10px;
      border: 2px solid white;
    }
  }

  .subtitle {
    width: 100%;
    text-align: center;
    padding: 10px;
    font-size: 1rem;
  }

  button {
    width: 100%;
    max-width: 500px;
    margin: 30px 0px;
    padding: 10px;
    border: none;
    text-align: center;
    padding: 10px !important;
    border-radius: 10px;
    font-size: 1rem;
    background: #ff532e;
    color: #f3f4f7;
    cursor: pointer;
    box-shadow: 4px 5px 6px rgba(0, 0, 0, 0.6);
    /* font-size: 1.2rem; */

    .title {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  .pros {
    justify-content: center;
    min-width: 50%;
    text-align: center;
    padding: 10px;
    font-size: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 30px;
    /* display: grid; */
    /* grid collum 2 */
    /* grid-template-columns: repeat(2, 1fr); */

    li {
      list-style: none;
    }
  }

  .list-is-not {
    padding: 40px 0;
    width: 90%;

    display: flex;
    flex-wrap: wrap;

    gap: 40px;
    justify-content: center;

    > * {
      width: max(43%, 300px);
    }

    .title {
      width: 100%;
      /* text-align: center; */
      padding: 10px 0px;
      margin-bottom: 20px;
      font-size: 1.4rem;
      font-weight: 600;
      * {
        font-family: 'Maven Pro', sans-serif;
      }
    }

    .list {
      width: 100%;
      font-weight: lighter;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .item {
        display: flex;
        align-items: center;
        span {
          margin: 0px !important;
          flex: 1;
        }
      }
    }

    .title span {
      padding: 4px 10px;

      font-weight: 600;
      color: #f3f4f7;
      margin: 0px;
    }

    svg {
      margin-right: 8px;
      width: 20px;
      height: 20px;
    }

    .is {
      svg {
        fill: #45ac5d;
      }
      .title span {
        background: #45ac5d;
      }
    }

    .not {
      svg {
        fill: red;
      }
      .title span {
        background: red;
      }
    }
  }

  .depositions {
    /* gap: 20px; */
    text-align: center;
    background: #1f1f1f;
    padding: 20px 0;
    width: 100vw;

    .title {
      font-size: 1.4rem;
      font-weight: 600;
      color: #f3f4f7;
      margin-bottom: 40px;
    }

    .images {
      width: 100%;
      display: flex;
      /* flex-direction: column; */
      align-items: center;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;

      .image-container {
        width: min(90%, 500px);
        height: min(80px, 20vw);
        position: relative;

        .image {
          width: 100%;
          height: 100%;
          position: relative !important;
          object-fit: cover; // Optional
        }
      }
    }
  }

  .politicas {
    width: 100vw;
    text-align: center;
    padding: 60px 0;
    /* background: #1f1f1f; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    /* color: #f3f4f7; */

    a {
      text-decoration: none;
      /* color: #f3f4f7; */
      color: black;
      font-weight: 600;
    }

    .linha {
      display: flex;
      gap: 20px;
    }
    .is-not {
      width: min(90%, 900px);
    }
  }

  .garantia {
    padding-top: 20px;
    padding-bottom: 60px;
    width: 100%;
    display: flex;

    //wrap
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .image-container {
      width: min(50%, 320px);
      height: min(200px, 90vw);
      position: relative;

      .image {
        width: 100%;
        height: 100%;
        position: relative !important;
        object-fit: cover; // Optional
      }
    }

    .description {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      /* padding: 40px 0; */
      /* flex: 1; */
      width: min(100%, 500px);
      /* width: 100%;
       */
      /* width: 90%; */
    }

    h2 {
      font-size: 1.8rem;
    }

    p {
      width: 80%;
    }
  }
`
