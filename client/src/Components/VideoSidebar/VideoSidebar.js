import React, { useState } from 'react'
import './VideoSidebar.css'
import FavouriteIcon from '@mui/icons-material/Favorite'
import MessageIcon from '@mui/icons-material/Message'
import ShareIcon from '@mui/icons-material/Share'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'


function VideoSidebar({likes, share, messages}) {
  const [liked, setLiked] = useState(false)

  return (
    <div className='videoSidebar'>
        <div className='videoSidebar__button'>
          {
            liked ? (
              <FavouriteIcon fontSize='large' onClick={
                (e) => setLiked(false)
              } />
            ) : (
              <FavoriteBorderIcon fontSize='large' onClick={
                (e) => setLiked(true)
              } />
            )
          } 
          <p>{liked ? likes + 1 : likes}</p>
        </div>

        <div className='videoSidebar__button'>
          <MessageIcon fontSize='large' />
          <p>{messages}</p>
        </div>

        <div className='videoSidebar__button'>
          <ShareIcon fontSize='large' />
          <p>{share}</p>
        </div>
    </div>
  )
}

export default VideoSidebar