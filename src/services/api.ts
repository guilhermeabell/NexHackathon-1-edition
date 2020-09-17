import axios from 'axios'

const api = axios.create({
  baseURL: 'https://back-nexhacka.herokuapp.com'
})

export default api;