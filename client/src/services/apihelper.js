// import axios from 'axios'
import api from './apiconfig'

// const baseUrl = process.env.NODE_ENV === 'production' ? 'https://shoulder-api.herokuapp.com/' : 'http://localhost:3000' 
// let apiUrl = ''

// const apiUrls = {
//     production: 'https://shoulder-api.herokuapp.com/',
//     development: 'http://localhost:3000/'
// }

// if (window.location.hostname === 'localhost') {
//     apiUrl = apiUrls.development
// } else {
//     apiUrl = apiUrls.production
// }


// const api = axios.create({
//   baseURL: baseUrl
// })


export const getUsers = async () => {
    const response = await api.get('/users')
    return response.data
}

export const getPosts = async () => {
    const response = await api.get('/posts')
    return response.data
}

export const getUserPosts = async (id) => {
    const response = await api.get(`/users/${id}/posts/${id}`)
    return response.data
}
export const getOnePost = async (id) => {
    const response = await api.get(`/post/${id}`)
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

export const updatePost = async (id, postInfo) => {
    const response = await api.put(`posts/${id}`, { post: postInfo })
    return response.data
}

export const deletePost = async (id) => {
    const response = await api.delete(`posts/${id}`)
    return response.data
}
export default api