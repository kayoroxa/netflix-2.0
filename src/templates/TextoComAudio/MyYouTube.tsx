import { isNumber } from 'lodash'
import { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import { YouTubePlayer } from 'youtube-player/dist/types'
import { I_Text } from '../../utils/types/_type_text_lyrics'

interface IProps {
  textData: I_Text
  inLoop?: boolean
}

export default function MyYouTube({ textData, inLoop }: IProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoTarget, setVideoTarget] = useState<YouTubePlayer | null>(null)
  const [indexActive, setIndexActive] = useState<number | boolean>(false)

  useEffect(() => {
    if (videoTarget && isPlaying) {
      if (inLoop) {
        // loop video in index start and end

        let index = !isNumber(indexActive) ? 0 : indexActive
        const duration =
          textData.lyrics[index].end - textData.lyrics[index].start

        const time = textData.lyrics[index].start / 1000

        videoTarget.seekTo(time, true)

        const interval = setInterval(async () => {
          videoTarget.seekTo(time, true)
        }, duration)

        return () => clearInterval(interval)
      } else {
        const interval = setInterval(async () => {
          const currentTime = (await videoTarget?.getCurrentTime()) * 1000
          // console.log(currentTime)
          const findIndex = textData.lyrics.findIndex(
            (item: any) => item.start <= currentTime && item.end >= currentTime
          )
          setIndexActive(findIndex)
        }, 500)

        return () => clearInterval(interval)
      }
    }
  }, [isPlaying, inLoop])

  function _onReady(event: { target: YouTubePlayer }) {
    // setTimeout(() => {
    setVideoTarget(event.target)
    // }, 1000)

    // videoTarget?.seekTo(10, true)
    // event.target.seekTo(10)
  }

  return (
    <div
      style={{
        display: 'none',
        position: 'absolute',
        width: '1px',
        height: '1px',
      }}
    >
      <YouTube
        className="yt-vid"
        videoId={textData.audioUrl}
        opts={{
          playerVars: {
            modestbranding: 1,
            fs: 0,
            showinfo: 0,
            controls: 0,
          },
        }}
        onReady={_onReady}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onEnd={({ target }) => {
          target.seekTo(0, true)
          setIsPlaying(false)
        }}
      />
    </div>
  )
}
