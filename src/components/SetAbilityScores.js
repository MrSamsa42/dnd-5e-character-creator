import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class SetAbilitiesScores extends Component {


    render() {
        return (
            <div>
                <h1>Set ability scores page</h1>
                <Link to={ {pathname: '/name-character'} }>
                        <button type="submit" className="btn-large">Save and Continue</button>
                </Link> 
            </div>
        )
    }
}

export default SetAbilitiesScores;