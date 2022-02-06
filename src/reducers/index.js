import { combineReducers } from "redux";


import posts from "./posts";

import postById from "./postById";

export const reducers = combineReducers({posts,  postById})
