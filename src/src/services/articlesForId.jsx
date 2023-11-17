import axios from 'axios'

const baseUrl = 'https://api-luigi-digital-production.up.railway.app/api/articles/article'

const getArticleForId = (c) => {
    const request = axios.get(`${baseUrl}/${c}`)
    return request.then(response => response.data)
}
export default { getArticleForId }
