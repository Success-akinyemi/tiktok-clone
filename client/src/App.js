import './App.css';
import Video from './Pages/Video/Video';
import { useEffect, useState } from 'react';
import axios from './axios'


function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPost(){
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      
      return response;
    }

    fetchPost();
  }, []);

  console.log(videos)

  return (
    <div className="app">
      <div className='app_container'>
        {videos.map(({url, channel, description, song, likes, share, messages}) => (
          <Video 
          vidSrc={url}
          channel={channel}
          description={description}
          song={song}
          likes={likes}
          share={share}
          messages={messages}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
