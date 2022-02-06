import { FETCH_ALL, FETCH_BY_ID } from '../constants/actionTypes'
import * as api from '../api'




export const getPosts = (page) => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts(page)

        dispatch({type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error.message)
    }


}
export const fetchById = (id) => async (dispatch) => {
    try {
        const {data} = await api.fetchPostsById(id)

        dispatch({type: FETCH_BY_ID, payload: data})


    } catch (error) {
        console.log(error.message)
    }


}
export const filterName = (page, name) => async (dispatch) => {
    try {
        const {data} = await api.filterByName(page, name)

        dispatch({type: FETCH_ALL, payload: data})


    } catch (error) {
        console.log(error.message)
    }


}
