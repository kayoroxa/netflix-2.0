import { ContainerAvatar } from './styles-avatar'

interface IProps {}
const Avatar = ({}: IProps) => {
  return (
    <ContainerAvatar className="avatar">
      <div className="img-container">
        <img
          src={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg'
          }
          alt=""
        />
      </div>
      <div className="info">
        {/* <div className="user-name">{session?.user?.name}</div> */}
      </div>
    </ContainerAvatar>
  )
}

export default Avatar
