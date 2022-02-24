import styled from 'styled-components'

export const ContainerAvatar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  /* background-color: blue; */

  .img-container {
    width: min(60px, 15%);
    height: 100%;
    overflow: hidden;
    border-radius: 14px;

    img {
      width: 100%;
      height: 100%;
      min-width: 100%;
      min-height: 100%;
      object-fit: cover;
    }
  }

  .info {
    flex: 1;

    .user-name {
      font-size: 1.3rem;
    }
  }
`
