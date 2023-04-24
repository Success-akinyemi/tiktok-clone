import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from '../../Components/VideoFooter/VideoFooter';
import VideoSidebar from '../../Components/VideoSidebar/VideoSidebar';

function Video({vidSrc, channel,description, song, messages,
                likes,share}) {
    const [playVideo, setPlayVideo] = useState(false);
    const videoRef = useRef(null)

    const handlePlay = () => {
        // playing then stop it
        if(playVideo){
            videoRef.current.pause()
            setPlayVideo(false)
        }else{
            videoRef.current.play()
            setPlayVideo(true)
        }

        // if not playing then play it
    }

  return (
    <div className='video'>
        <video 
            className='video_player'
            src={vidSrc}
            loop
            ref={videoRef}
            onClick={handlePlay}
        >
        </video>

        <VideoFooter channel={channel} description={description} song={song}/>
        <VideoSidebar likes={likes} share={share} messages={messages} />
    </div>
  )
}

export default Video