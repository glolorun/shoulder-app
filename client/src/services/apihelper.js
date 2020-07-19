import axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://shoulder-app.herokuapp.com/' : 'http://localhost:3000' 

const api = axios.create({
  baseURL: baseUrl
})

export const getUsers = async () => {
    const response = await api.get('/users')
    return response.data
}

export const getPosts = async () => {
    const response = await api.get('/posts')
    return response.data
}

export const getUserPosts = async (id) => {
    const response = await api.get(`/users/${id}/posts`)
    return response.data
}

export const getCategories = async () => {
    const response = await api.get('categories')
    return response.data
}

export const getOneCategory = async (id) => {
    const response = await api.get(`categories/${id}`)
    return response.data
}

export const addPost = async (postInfo) => {
    const response = await api.post("/posts", { post: postInfo })
    return response.data
}
  
export default api