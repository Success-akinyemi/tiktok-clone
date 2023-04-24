import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:9000",
//https://tiktok-clone-backend.onrender.com
})

export default instance