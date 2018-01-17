import React from 'react';
import { Link } from 'react-router-dom';
import CodeWarsData from './CodeWarsData.jsx';
import CodeSchoolData from './CodeSchoolData.jsx';
import GithubUserData from './GithubUserData.jsx';

export default class UsernameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codeWarsName: '',
            codeSchoolName: '',
            gitHubName: '',
            showUserDashboard: false
        };
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        this.setState({ ...this.state, showUserDashboard: true });
    }
    handleCWChange(e) {
        this.setState({ ...this.state, codeWarsName: e.target.value });
    }

    handleCSChange(e) {
        this.setState({ ...this.state, codeSchoolName: e.target.value });
    }

    handleGitChange(e) {
        this.setState({ ...this.state, gitHubName: e.target.value });
    }


    render() {

        const userDashBoard =
            this.state.showUserDashboard ? (<div>
                <CodeWarsData username={this.state.codeWarsName} />
                <CodeSchoolData user={this.state.codeSchoolName} />
                <GithubUserData user={this.state.gitHubName} />
            </div>) : "";

        return (
            <form>
                
                <h2> Start by entering your usernames below</h2>

                <label>
                    Code Wars Username:
            </label>
                <input type="name" onChange={this.handleCWChange.bind(this)} value={this.state.codeWarsName} />
                <br />

                <label>
                    Code School Username:
            </label>
                <input type="name" onChange={this.handleCSChange.bind(this)} value={this.state.codeSchoolName} />
                <br />

                <label>
                    GitHub Username:
            </label>
                <input type="name" onChange={this.handleGitChange.bind(this)} value={this.state.gitHubName} />
                <br />
                <Link to ={"/dashboard"}>
                <button type="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
                </Link>
            </form>
        );
    }
}
