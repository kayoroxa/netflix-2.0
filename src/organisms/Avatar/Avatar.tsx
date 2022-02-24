import React from 'react'

import { ContainerAvatar } from './styles-avatar'

interface IProps {}
const Avatar = ({}: IProps) => {
  return (
    <ContainerAvatar className="avatar">
      <div className="img-container">
        <img
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
          alt=""
        />
      </div>
      <div className="info">
        <div className="user-name">Caio</div>
      </div>
    </ContainerAvatar>
  )
}

export default Avatar
