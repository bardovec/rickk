import { FETCH_ALL, FETCH_BY_ID } from '../constants/actionTypes'

export default (posts = [], action) => {

    switch (action.type) {

        case FETCH_ALL:
            return action.payload;
        case FETCH_BY_ID:
            return action.payload;
        default:
            return posts
    }
}
