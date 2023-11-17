import axios from 'axios'

const baseUrl = 'https://api-luigi-digital-production.up.railway.app/api/articles/category'
//const baseUrl = 'https://secret-peak-13231.herokuapp.com/api/articles/category'


const getArticlesForCategory = (c) => {
    const request = axios.get(`${baseUrl}/${c}`)
    return request.then(response => response.data)
}
export default { getArticlesForCategory }
