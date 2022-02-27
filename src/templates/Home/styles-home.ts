import styled from 'styled-components'

export const ContainerHome = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  width: 100vw;
  font-family: 'Roboto', sans-serif;
  //
  /* background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 58%,
    rgba(250, 149, 255, 0.8) 100%
  ); */
  //after
  ::before {
    content: '';
    position: fixed;
    top: 0;
    z-index: -20;
    left: 0;
    width: 100%;
    height: 100%;

    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f0f2fe 100%),
      radial-gradient(
        circle farthest-corner at 70% 40%,
        rgb(239, 224, 231) 6.8%,
        rgb(229, 231, 246) 40.2%
      );
  }

  header {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    gap: 30px;
    align-items: center;
    padding: 0 20px;
    a {
      text-decoration: none;
      color: #000;
    }
    a:hover {
      color: red;
    }
    img {
      /* width: 100px; */
      height: 40px;
    }
  }

  .container-poster {
    width: 100%;
    height: 50vh;
  }

  @media (max-width: 768px) {
    .container-poster {
      width: 100%;
      height: 30vh;
    }
  }

  /* box-sizing: border-box; */

  .left {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    box-sizing: border-box;
  }

  .right {
    box-sizing: border-box;
    padding: 10px;
    border-radius: 35px 0 0 35px;
    display: flex;
    /* margin: 10px; */
    flex-direction: column;
    gap: 20px;
    background: linear-gradient(
      180deg,
      rgb(240, 242, 254) 0%,
      rgb(240, 242, 254) 100%
    );

    .avatar {
      box-sizing: border-box;
      padding: 20px;
    }
  }
  section {
    margin: auto;
    width: 100%;
    max-width: 1600px;
    position: relative;
  }
  //is pc
  @media (min-width: 768px) {
    .right {
      position: fixed;
      right: 0;
      width: 25%;
      min-height: 100vh;
    }
    .left {
      width: 74%;
      padding: 0;
      padding: 15px 30px;
    }
    section {
      display: flex;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .left {
      width: 100vw;
      padding: 8px;
    }
    .right {
      width: 100%;
      border-radius: 0;
      padding: 0;
    }
  }
`
