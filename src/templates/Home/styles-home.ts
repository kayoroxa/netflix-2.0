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
        rgb(225, 226, 244) 40.2%
      );
  }

  header {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    gap: 30px;
    align-items: center;
    padding: 0 20px;

    img {
      /* width: 100px; */
      height: 70px;
    }
  }

  section {
    display: flex;
    width: 100%;
  }

  /* box-sizing: border-box; */

  .left {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
  }

  .right {
    position: fixed;
    right: 0;
    width: 25%;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 35px 0 0 35px;
    display: flex;
    /* margin: 10px; */
    flex-direction: column;
    gap: 20px;
    background: linear-gradient(
      180deg,
      rgba(234, 247, 252, 1) 0%,
      rgb(240, 242, 254) 100%
    );

    .avatar {
      box-sizing: border-box;
      padding: 20px;
    }
  }
`
