import React from 'react'
import { connect } from 'react-redux'

import {getMovie as actionCreators} from '../actions/getMovie'
import './MovieDisplay.css'
import star from '../../src/assets/star.svg'
 function MovieDisplay(props) {
    return (
        <div className="movie">
            <div className="movie__container">
                <img src={props.movie.medium_cover_image} alt="movies"/>
                <div className="overlay">
                    <img src={star} alt="star"/>
                    <h2>{props.movie?.rating || 5} / 10</h2>
                    <h2>{props.movie?.genres[0] || "Action"}</h2>
                    <button className="btn">View Details</button>
                </div>
            <h3>{props.movie?.title}</h3>
            <p>{props.movie?.year}</p>

            </div>
        </div>
    )
}

const mapDispatchToProps= dispatch=>{
    return{
        getMovieDetail:(id)=>dispatch(actionCreators(id))
    }
}


export default connect(null,mapDispatchToProps)(MovieDisplay)