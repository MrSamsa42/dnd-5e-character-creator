import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//import axios from 'axios';

class NameCharacter extends Component {
    state = {
        playerName: '',
        characterName: '',
        characterDescription: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addAttribute(this.state)
    }

    testClick = (e) => console.log(this.props.character);

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Getting Started...</h5>
                    <div className="input-field">
                        <label htmlFor="playerName">Player Name</label>
                        <input type="text" id="playerName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="characterName">Character Name</label>
                        <input type="text" id="characterName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="characterDescription">Character Description</label>
                        <textarea id="characterDescription" onChange={this.handleChange} className="materialize-textarea"></textarea>
                    </div>
                    <div className="input-field">
                        <Link to={ {pathname: '/choose-race'} }>
                            <button className="btn red z-depth-0">
                                Save Changes!
                            </button>
                        </Link>                        
                    </div>
                </form>
                <button className="btn blue" onClick={this.testClick}>
                    TESTING
                </button>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        character: state.attr.character
    }
};

const mapDispatchtoProps = (dispatch) => {
    return {
        addAttribute: (info) => { dispatch( {type: 'ADD_NAMES', info: info  } ) }
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(NameCharacter);