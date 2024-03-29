import axios from 'axios'
axios.defaults.withCredentials = true;


let serverUrl = 'https://telemedicine.ap-1.evennode.com/'

//Custom API to fetch data from the server using axios
const api = axios.create({
    baseURL: serverUrl,
    withCredentials: true
})



export default api;
