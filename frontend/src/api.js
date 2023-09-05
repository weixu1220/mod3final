import axios from 'axios'

const baseURL = import.meta.env.PROD ? import.meta.env.VITE_API : ''


const customAxiosWithBaseUrl = axios.create({
    baseURL: baseURL
})


console.log(customAxiosWithBaseUrl)
export default customAxiosWithBaseUrl