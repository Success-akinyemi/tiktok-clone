import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import Ticker from 'react-ticker'
import disc from '../../assest/pic.png'

function VideoFooter({channel, description, song}) {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'>
            <h3>{channel}</h3>
            <p>{description}</p>
            <div className='videoFooter__ticker'>
                <MusicNoteIcon 
                    className='videoFooter__icon'
                />

                <Ticker mode='smooth'>
                  {({ index }) => (
                    <>
                      <p>{song}</p>
                    </>
                  )}
                </Ticker>
            </div>
        </div>
        <img 
          src={disc}
          className='videoFooter_record'
          alt='disc' 
        />
    </div>
  )
}

export default VideoFooter