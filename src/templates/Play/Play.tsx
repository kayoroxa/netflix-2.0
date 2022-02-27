import React, { useEffect, useState } from 'react'

import { ContainerPlay } from './styles-play'
import { BiArrowBack } from 'react-icons/bi'
import { useRouter } from 'next/router'
import YouTube from 'react-youtube'
interface IProps {
  id: string
  gDrive?: boolean
}
const Play = ({ id, gDrive }: IProps) => {
  const router = useRouter()
  const ref = React.useRef<HTMLDivElement>(null)
  const goBack = React.useRef<HTMLDivElement>(null)

  function openFullscreen(elem: any) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen()
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen()
    }
  }

  // function closeFullscreen() {
  //   if (document.exitFullscreen) {
  //     document.exitFullscreen()
  //   } else if (document.webkitExitFullscreen) {
  //     /* Safari */
  //     document.webkitExitFullscreen()
  //   } else if (document.msExitFullscreen) {
  //     /* IE11 */
  //     document.msExitFullscreen()
  //   }
  // }

  let timeOut: NodeJS.Timeout | null = null
  function onMouseMove() {
    console.log('mouse move')
    if (goBack.current) {
      if (timeOut) clearTimeout(timeOut)
      goBack.current.style.opacity = '1'

      timeOut = setTimeout(() => {
        if (goBack.current) {
          goBack.current.style.opacity = '0'
        }
      }, 1000)
    }
  }
  const [videoTarget, setVideoTarget] = useState<any>(null)
  const [showControls, setShowControls] = useState(false)
  function _onReady(event: any) {
    setVideoTarget(event.target)
  }

  // useEffect(() => {
  //   if (showControls) {

  //   }
  // }, [showControls])
  return (
    <ContainerPlay ref={ref}>
      <div
        className="go-back"
        ref={goBack}
        onClick={() => {
          router.push('/')
          // console.log(videoTarget)
          //
        }}
      >
        <BiArrowBack />
      </div>
      {showControls && <div className="controls--player"></div>}
      <div className="container-video">
        <div className="anti" onClick={() => openFullscreen(ref.current)}>
          {!gDrive ? (
            // <iframe
            //   width="560"
            //   height="315"
            //   src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&showinfo=0&autohide=1&modestbranding=1`}
            //   title="YouTube video player"
            //   frameborder="0"
            //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            //   // allowfullscreen
            //   cc_load_policy={3}
            // ></iframe>

            <YouTube
              videoId={id}
              opts={{ playerVars: { autoplay: 1, modestbranding: 1, fs: 0 } }}
              onReady={_onReady}
              onPause={() => setShowControls(true)}
              onPlay={() => setShowControls(false)}
            />
          ) : (
            <iframe
              allowFullScreen={true}
              marginHeight={0}
              marginWidth={0}
              mozallowfullscreen="NO"
              scrolling="NO"
              src="https://drive.google.com/file/d/1xh5fWNa5kgpfE2sUN_FN2yUWexlYP6es/preview"
              style={{ border: '2px' }}
              webkitallowfullscreen="NO"
            ></iframe>
          )}
        </div>
      </div>
    </ContainerPlay>
  )
}

export default Play
