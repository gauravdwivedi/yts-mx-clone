import React, { Component } from 'react'

import {connect} from 'react-redux'
import {getMovies} from '../actions/getMovies'
import  DisplayMovie from './MovieDisplay'
import {Helmet} from 'react-helmet'
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
            <Helmet>
                <title>Yts.mx- Clone</title>
            </Helmet>
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
