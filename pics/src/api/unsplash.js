
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID HYHgI9Gi2G6awGjdHxBYheUNh01ZFpxjZRaw60wV1QU'
    }
})