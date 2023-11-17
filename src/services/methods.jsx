import axios from 'axios'

const baseUrl = 'https://secret-peak-13231.herokuapp.com/api/methods'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default { getAll }