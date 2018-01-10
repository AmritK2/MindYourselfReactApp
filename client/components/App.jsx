/*
    ./client/components/App.jsx
*/
import React from 'react';
import CodeWarsData from './API.jsx';
import CodeSchoolData from './APICodeSchool.jsx';
import GithubUserData from './APIGithub.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codeWarsName: '',
            codeSchoolName: '',
            gitHubName: ''
        };

    }

    handleCWChange(e) {
        this.setState({...this.state, codeWarsName: e.target.value});
    }

    handleCSChange(e) {
        this.setState({...this.state, codeSchoolName: e.target.value});
    }

    handleGitChange(e) {
        this.setState({...this.state, gitHubName: e.target.value});
    }

    render() {
        return (

            <form>
                <h1>Intern Pack</h1>

                <h2> Please enter your usernames below</h2>

                <label>
                    Code Wars Username:
                </label>
                <input type="name" onChange={this.handleCWChange.bind(this)} value={this.state.codeWarsName}/>
                <br />

                <label>
                    Code School Username:
                </label>
                <input type="name" onChange={this.handleCSChange.bind(this)} value={this.state.codeSchoolName}/>
                <br />

                <label>
                    GitHub Username:
                </label>
                <input type="name" onChange={this.handleGitChange.bind(this)} value={this.state.gitHubName}/>
                <br />

                <button type = "submit"> Submit </button>
                <div>
                    <CodeWarsData username={this.state.codeWarsName}/>
                    <CodeSchoolData user={this.state.codeSchoolName}/>
                    <GithubUserData user={this.state.gitHubName}/>
                </div>
            </form>

        );
    }
}

export default App;

