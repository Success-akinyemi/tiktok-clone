import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tiktok-clone-backend.onrender.com",
})

export default instance