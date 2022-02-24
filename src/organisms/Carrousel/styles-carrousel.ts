import styled from 'styled-components'

export const ContainerCarrousel = styled.div`
  margin: 0;
  padding: 0;
  overflow-x: hidden;

  .head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
    /* font-size: 1rem; */
    line-height: 2;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    * {
      font-size: 1.2rem;
      padding: 5px 15px;
      border-radius: 5px;
      cursor: pointer;
      background-color: #f2f2f2;
      border: none;

      &:hover {
        background-color: blue;
      }
    }
  }

  .carrousel-images {
    height: 300px;
    box-sizing: border-box;
    /* min-width: 100%; */
    /* background: blue; */
    padding: 10px;
    min-width: fit-content;
    display: flex;
    gap: 30px;
    transition: all 1.3s;
  }
  .card {
    border-radius: 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: white;
    overflow: hidden;
    width: 250px;

    .container-img {
      height: 75%;
      width: 100%;
      /* background-color: pink; */
    }
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 40px;
      padding: 10px;
      box-sizing: border-box;
      min-height: 100%;
      min-width: 100%;
    }
    .infos {
      * {
        padding: 0 20px;
      }
    }
  }
`
