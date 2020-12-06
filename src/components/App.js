import React from 'react'
import { BrowserRouter as Router, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import {connect} from 'react-redux'

import './App.css'

function App(props) {
    return (
        <div className="app">
            <Router>
            <Switch>
                <Navbar />
            </Switch>
            </Router>
            
            
        </div>
    )
}
const mapStateToProps =(state)=>{
    return{
        movies:state.movies,
        movie:state.movie,
        searchMovie:state.searchMovie
    }
}

export default connect(mapStateToProps)(App)
