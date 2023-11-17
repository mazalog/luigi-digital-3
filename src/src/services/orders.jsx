import axios from 'axios'

const baseUrl = 'hhttps://api-luigi-digital-production.up.railway.app/api/orders'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, object) => {
    const request = axios.put(`${baseUrl}/${id}`, object)
    return request.then(response => response.data)
}
const deleteOrder = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { getAll, create, update, deleteOrder }
