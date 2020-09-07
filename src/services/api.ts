import axios from 'axios'

const api = axios.create({
  baseURL: 'http://nexbacktemp-com.umbler.net'
})

export default api;