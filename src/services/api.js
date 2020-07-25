import axios from 'axios'

const instance = axios.create({
    baseURL: "https://www.amiiboapi.com/api"
})

export default {
    getGames: () => instance.get('amiibo').then(({ data }) => data, (error) => Promise.reject(error))
}
