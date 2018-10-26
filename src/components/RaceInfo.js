import React, {Component} from 'react';

class RaceInfo extends Component {
    state = {
        raceName : '',
        raceInfo : {}
    }

    componentDidMount() {
        this.setState({raceName: this.props.match.params.raceName});

        let url;
        if(this.props.location.state){
            url = this.props.location.state.raceurl;
            fetch(url).then(response => response.json()).then(result => this.setState({
                raceInfo : result
            }));
        }

        
        

        // axios.get(url)
        // .then(res => {
        //     console.log(res)
        // })

        //fetch(url).then(response => console.log(response.json()))

       
    }

    render() {
        return (
            <div className="container">
                <h4>{this.state.raceName}</h4>
                <p><b>Alignment: </b>{this.state.raceInfo.alignment}</p>
                <p><b>Age: </b>{this.state.raceInfo.age}</p>
                <p><b>Size: </b>{this.state.raceInfo.size_description}</p>
                <p><b>Language: </b>{this.state.raceInfo.language_desc}</p>
            </div>
        )
    }
}

export default RaceInfo;