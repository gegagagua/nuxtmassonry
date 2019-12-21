import axios from 'axios'
const url = 'http://nnamper.pythonanywhere.com/rest/'

const API = {
  getGallery () {
    return axios.get(url + 'gallery/')
  },
  getBiography () {
    return axios.get(url + 'biography/')
  },
  getContact () {
    return axios.get(url + 'contact/')
  },
  getAbout () {
    return axios.get(url + 'about/')
  }
}

export default API
