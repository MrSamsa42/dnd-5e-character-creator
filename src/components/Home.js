import React, {Component} from 'react';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';

//import axios from 'axios';

class Home extends Component {

    render() {

        return (
            <div className="container">
                <h1 className="center">Welcome to my DnD Character Creation App! </h1>
                <div className="center">
                    <Link to={ {pathname: '/set-ability-scores'} }>
                        <button type="submit" className="btn-large">Click Here to Get Started</button>
                    </Link> 
                </div>
                    
            </div>
        )
    }
}

export default Home;