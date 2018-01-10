import React from 'react';

const urlForData =  username => `https://www.codewars.com/api/v1/users/${username}`

class CodeWarsData extends React.Component{
    constructor(props){
    super (props) // super props need to added to ensure it initializes correctly
        this.state = {
        requestFailed: false
        }
    }

    componentDidMount(){
        fetch(urlForData(this.props.username))
            .then(response =>{
                if (!response.ok){ //checks if a response is ok
                    throw Error ("Request Failed")
                }
                return response
            })
            .then(d => d.json()) // json the response and store it in d
            .then(d => {
                this.setState({
                    codeWarsData: d // store the json parsed response in order to access specific data
                })
            }, () => {this.setState({
            requestFailed: true
                })
            })
        //end of promise chain
    }
    render(){
        if (!this.state.codeWarsData) return <p>Loading..</p>
        if (this.state.requestFailed) return <p>FAILED</p>
        return(
            <div>
              <h2>{this.state.codeWarsData.name}</h2>
                <h2>{this.state.codeWarsData.leaderboardPosition}</h2>
            </div>
        )
    }
}

export default CodeWarsData;
