import axios from 'axios'

const API = axios.create({
    baseURL: 'https://67877cc6c4a42c916106f30c.mockapi.io/api/',
   
    // withCredentials: true
})


// API.interceptors.request.use((config) => {
//     const token = localStorage.getItem('tokenV1')
//     if (token) {
//         config.headers.Authorization = 'Bearer ' + token
//     }
//     console.log('REGUES SEND');
//     return Promise.resolve(config)
// }, (err) => {
//     console.log('REGUES ERROR');

//     return Promise.reject(err)
// })




// API.interceptors.response.use((config) => {
//     console.log('RESPONSE ARRIVED');
//     return Promise.resolve(config)
// }, (err) => {
//     if (err && err.response && err.response.status === 401) {
//         localStorage.removeItem('tokenV1')
//         window.location.replace('/auth')
//     }
//     console.log('RESPONSE ERROR');
//     return Promise.reject(err)
// })



export default API

