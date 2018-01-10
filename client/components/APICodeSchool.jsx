import React from 'react';

const urlForCWData =  user=> `https://www.codeschool.com/users/${user}.json`;

export default class CodeWarsData extends React.Component{

    constructor(props){
        super (props) // super props need to added to ensure it initializes correctly
        this.state = {
            requestFailed: false
        }
    }
    componentDidMount(){
        fetch(urlForCWData(this.props.user))
            .then(response =>{
                if (!response.ok){ //checks if a response is ok
                    throw Error ("Request Failed")
                }
                return response
            })
            .then(d => d.json()) // json the response and store it in d
            .then(d => {
                this.setState({
                    codeSchoolData: d // store the json parsed response in order to access specific data
                })
            }, () => {this.setState({
                requestFailed: true
            })
            })
        //end of promise chain
    }

    render(){
        if (!this.state.codeSchoolData) return <p>Loading..</p>
        if (this.state.requestFailed) return <p>FAILED</p>
        return(
            <div>
                <h1>Code School</h1>
                <h2>Name: {this.state.codeSchoolData.user.username}</h2>
            
            </div>
        )
    }
}