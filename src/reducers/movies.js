import * as actions from '../actions/actionTypes'


const initialState ={
    movies:[],
    loading:false,
    error:null
}


const reducer = (state=initialState,action)=>{

        switch(action.type){
            case actions.GET_MOVIES:
                return {
                    ...state,
                    movies:[...action.movies]

                }
            case actions.GET_MOVIES_START:
                return{
                    ...state,
                    loading:true,
                    error:null
                }
            
            case actions.GET_MOVIES_SUCCESS:

            console.log('movies state:',state.movies)
                return{
                    ...state,
                    loading:false
                }
            case actions.GET_MOVIES_ERROR:
                return{
                    ...state,
                    loading:false,
                    error:action.movies
                }

            default:
                    return state
        }


}

export default reducer