import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    // withCredentials: true
})


instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = 'Token ' + token
    }
    console.log('REGUES SEND'); 
    return Promise.resolve(config)
}, (err) => {
    console.log('REGUES ERROR');

    return Promise.reject(err)
})




instance.interceptors.response.use((config) => {
    console.log('RESPONSE ARRIVED');
    return Promise.resolve(config)
}, (err) => {
    if (err && err.response && err.response.status === 401) {
        localStorage.removeItem('token')
    }
    console.log('RESPONSE ERROR');
    return Promise.reject(err)
})




export default instance