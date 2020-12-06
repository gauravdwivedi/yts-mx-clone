import {combineReducers} from 'redux'

import movies from './movies'
import movie from './movie'
import searchMovie from './searchMovie'



const rootReducer = combineReducers({
    movie,
    movies,
    searchMovie
})

export default rootReducer