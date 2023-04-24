import './App.css';
import Video from './Pages/Video/Video';
import oneImg from './assest/1.mp4'
import twoImg from './assest/2.mp4'
import threeImag from './assest/3.mp4'
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
        <Video 
          vidSrc={oneImg}
          channel='@sssuccess'
          description='This Works here'
          song='this is a song'
          likes={170}
          share={45}
          messages={34}
        /> 
        <Video 
          vidSrc={twoImg}
          channel='@Marvel'
          description='This Works solid'
          song='this is a maching'
          likes={234}
          share={90}
          messages={134}
          />
          <Video 
          vidSrc={threeImag}
          channel='@Marvel'
          description='This Works solid'
          song='this is a maching'
          likes={254}
          share={30}
          messages={234}
          />
      </div>
    </div>
  );
}

export default App;
