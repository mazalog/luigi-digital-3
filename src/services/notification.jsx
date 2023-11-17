import axios from 'axios'

const baseUrl = 'https://secret-peak-13231.herokuapp.com/api/sendnotifications'

const create = (subject) => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default { create }