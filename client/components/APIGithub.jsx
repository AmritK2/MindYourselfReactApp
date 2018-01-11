import React from 'react';

const urlGithubUser = user => `https://api.github.com/users/${user}`;
const urlGithubRepo = user =>  `https://api.github.com/users/${user}/repos`;

export default class GithubUserData extends React.Component{
    constructor(props){
        super (props); // super props need to added to ensure it initializes correctly
        this.state = {
            requestFailed: false
        }
    }

    componentWillMount() {
        {this.getUserName()}
        {this.getUserRepo()}
    }

    render(){
        if (!this.state.githubData) return <p>Loading..</p>;
        if (this.state.requestFailed) return <p>FAILED</p>;
        return(
            <div>
                <h1>GitHub</h1>
                <h2>Name: {this.state.githubData.name}</h2>

            </div>
        )
    }

    getUserName () {
        fetch(urlGithubUser(this.props.user))
            .then(response => {
                if (!response.ok) { //checks if a response is ok
                    throw Error("Request Failed")
                }
                return response;
            })
            .then(d => d.json()) // json the response and store it in d
            .then(d => {
                this.setState({
                    githubData: d // store the json parsed response in order to access specific data
                })
            }, () => {
                this.setState({
                    requestFailed: true
                })
            })
    }

    getUserRepo() {
        fetch(urlGithubRepo(this.props.repo))
            .then(response => {
                if (!response.ok) { //checks if a response is ok
                    throw Error("Request Failed")
                }
                return response
            })
            .then(d => d.json()) // json the response and store it in d
            .then(d => {
                this.setState({
                    githubRepoData: d // store the json parsed response in order to access specific data
                })
            }, () => {
                this.setState({
                    requestFailed: true
                })
            })
    }
}


