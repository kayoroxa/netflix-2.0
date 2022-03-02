import styled from 'styled-components'

export const ContainerCarrousel = styled.div`
  margin: 0;
  padding: 0;

  * {
    overflow: hidden;
  }

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
      background-color: #feffff;
      border: none;

      &:hover {
        background-color: red;
        color: white;
      }
    }
  }

  .carrousel-images {
    height: 26vh;
    box-sizing: border-box;
    /* min-width: 100%; */
    /* background: blue; */
    padding: 10px;
    min-width: fit-content;
    display: flex;
    gap: 15px;
    transition: all 1.3s;
  }

  .card {
    height: 100%;
    width: min(200px, 25vw);
    display: flex;
    flex-direction: column;
    background: white;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 25px;

    :hover {
      transform: scale(1.1);
    }

    .container-img {
      height: 75%;
      width: 100%;
      /* background-color: pink; */
    }
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 25px;
      padding: 8px;
      box-sizing: border-box;
      min-height: 100%;
      min-width: 100%;
    }
    .infos {
      display: flex;
      flex-direction: column;
      gap: 5px;
      > h3,
      div {
        padding: 0 20px;
      }
      .inline {
        font-size: 0.9rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
        > span {
          color: #acacac;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .container-img {
      height: 50%;
    }
    .carrousel-images {
      gap: 8px;

      .card {
        border-radius: 15px;
        width: 30vw;
        .container-img {
          flex: 1;
        }
        img {
          border-radius: 20px;
          padding: 8px;
        }
        .infos {
          padding: 0 10px;
          margin-bottom: 10px;
          .inline {
            display: none;
          }
          font-size: 0.7rem;
          h3 {
            padding: 0;
          }
        }
      }
    }
  }

  .carrousel-images.small {
    height: 120px;

    .card {
      flex-direction: row;
      /* justify-content: space-between; */
      align-items: center;
      border-radius: 18px;
      width: 240px;
    }

    .container-img {
      height: 100%;
      width: 33%;

      img {
        border-radius: 18px;
      }
    }
    .infos {
      margin-left: 10px;
    }
    .infos > * {
      padding: 0;
      margin-right: 10px;
      /* text-align: center; */
      font-size: 17px;
    }
  }
`
