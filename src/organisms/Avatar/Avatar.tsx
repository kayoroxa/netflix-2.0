import { useSession } from 'next-auth/react'
import React from 'react'
import { ContainerAvatar } from './styles-avatar'

interface IProps {}
const Avatar = ({}: IProps) => {
  const { data: session } = useSession()
  return (
    <ContainerAvatar className="avatar">
      <div className="img-container">
        <img
          src={
            session?.user?.image ||
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg'
          }
          alt=""
        />
      </div>
      <div className="info">
        <div className="user-name">{session?.user?.name}</div>
      </div>
    </ContainerAvatar>
  )
}

export default Avatar
