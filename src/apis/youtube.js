import axios from 'axios';


const KEY = 'AIzaSyBhrtTn7dYJzI4r22bZ8-OLcC4C9p5rF08';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
})