import axios from "axios";


export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    // withCredentials: true,
})

export const publicApi = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true
})