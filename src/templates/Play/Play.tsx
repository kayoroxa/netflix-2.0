import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import YouTube from 'react-youtube'
import { ContainerPlay } from './styles-play'

interface IProps {
  id: string
  gDrive?: boolean
}
const Play = ({ id, gDrive }: IProps) => {
  const router = useRouter()
  const ref = React.useRef<HTMLDivElement>(null)
  const goBack = React.useRef<HTMLDivElement>(null)

  function toggleFullScreen(elem: any) {
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        console.log(elem)
        try {
          elem?.requestFullscreen()
        } catch (error) {
          console.log('oio')
        }
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen()
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen()
      }
      screen.orientation.lock('landscape-primary')
    } else {
      document.exitFullscreen()
      screen.orientation.lock('portrait-primary')
    }
  }

  const [showControls, setShowControls] = useState(false)
  function _onReady(event: any) {
    // setVideoTarget(event.target)
    event.target.seekTo(10)
  }

  // useEffect(() => {
  //   if (showControls) {

  //   }
  // }, [showControls])
  useEffect(() => {
    function _isMobile() {
      // if we want a more complete list use this: http://detectmobilebrowsers.com/
      // str.test() is more efficent than str.match()
      // remember str.test is case sensitive
      var isMobile = /iphone|ipod|android|ie|blackberry|fennec/.test(
        navigator.userAgent.toLowerCase()
      )
      return isMobile
    }
    if (ref.current && _isMobile()) {
      toggleFullScreen(ref.current)
    }
  }, [ref])
  // useEffect(() => {
  //   alert('oi')
  // }, [])

  return (
    <ContainerPlay ref={ref}>
      <div
        className="go-back"
        ref={goBack}
        onClick={() => {
          router.back()
          // console.log(videoTarget)
          //
        }}
      >
        <BiArrowBack />
      </div>
      {showControls && <div className="controls--player"></div>}
      <div className="container-video">
        <div className="anti" onClick={() => toggleFullScreen(ref.current)}>
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
              // mozallowfullscreen="NO"
              scrolling="NO"
              src="https://drive.google.com/file/d/1xh5fWNa5kgpfE2sUN_FN2yUWexlYP6es/preview"
              style={{ border: '2px' }}
              // webkitallowfullscreen="NO"
            ></iframe>
          )}
        </div>
      </div>
    </ContainerPlay>
  )
}

export default Play
