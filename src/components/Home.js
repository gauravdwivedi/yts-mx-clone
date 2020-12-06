import React, { Component } from 'react'

import {connect} from 'react-redux'
import {getMovies} from '../actions/getMovies'
import  DisplayMovie from './MovieDisplay'
import './Home.css'

export class Home extends Component {

    componentDidMount() {
            this.props.getMovies()
    }
    

    render() {

        console.log(this.props.movies.movies[0])
        const movies = this.props.movies.movies
        return (
            <div className="movies "> 
              {movies.map((movie)=>(
                  <DisplayMovie movie={movie}/>
              ))}
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return {
        movies:state.movies
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        getMovies:()=> dispatch(getMovies())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
