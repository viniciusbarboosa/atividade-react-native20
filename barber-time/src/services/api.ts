import axios from 'axios';

const api = axios.create({
    baseURL: 'https://192.168.0.104:3332'
})

export {api};