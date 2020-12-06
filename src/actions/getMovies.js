import * as actions from '../actions/actionTypes'
import { axiosInstance as axios} from '../axios-instance'


export const getMovies=()=>{
    return dispatch =>{
            dispatch({type:actions.GET_MOVIES_START})
            axios.get('/list_movies.json')
            .then(res=>{
                 const movies = res.data.data.movies
                    console.log('movies ::',movies)    
                    
                    dispatch({type:actions.GET_MOVIES,movies})
                    dispatch({type:actions.GET_MOVIES_SUCCESS})
                    
            })
    }
}