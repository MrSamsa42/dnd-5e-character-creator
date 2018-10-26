import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Dragon from '../dragon.png';
import { connect } from 'react-redux';

//import axios from 'axios';

class ChooseRace extends Component {

    state = {
        races : [],
    }

    componentDidMount() {
        let url = 'http://www.dnd5eapi.co/api/races/';
        // axios.get(url)
        // .then(res => {
        //     console.log(res)
        // })

        //fetch(url).then(response => console.log(response.json()))

        fetch(url)
        .then(response => response.json())
        .then(result => this.setState({
            races : result.results, 
        }));        
    }


    render() {
        console.log(this.state);
        const races = this.state.races;
        //console.log(races)

        const raceList = races.length > 0 ? (
            races.map(race => {
                return (                 
                    <div className="post card" key={race.name}>
                        <Link to={ {pathname: '/' + race.name, state: {raceurl : race.url } }}>
                            <div className="card-content">
                            <img src={Dragon} alt='dragon' /> 
                                <span className="card-title red-text">{race.name}</span>
                                <p id='race-text'>Click for more info about the race of {race.name}</p>
                            </div>
                        </Link> 
                    </div>
                 
                )
            })
        ) : (
            <div className="center">No Races Info Yet...</div>
        )
        return (
            <div>
                <h2 className="center">These are the available races: </h2>
                <div className="container">
                    {raceList}
                </div>
            </div>
        )
    }
}

//here, 'state' is the state of the redux store
//this function tells 'connect' what data we want to grab from redux (state.races) and the property that we
//want to create on our props object to apply that data to (races).
const mapStateToProps = (state) => {
    return {
        races: state.races
    }
}
//'connect' is a function that returns a higher order component that will then wrap the 'Home' component
//
export default connect(mapStateToProps)(ChooseRace);