import axios from 'axios'

const baseUrl = 'https://api-luigi-digital-production.up.railway.app/api/articles/search'

const getArticlesForSearch = (s) => {
    const request = axios.get(`${baseUrl}/${s}`)
    return request.then(response => response.data)
}
export default { getArticlesForSearch }
