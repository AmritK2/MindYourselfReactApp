import React from 'react';
import { Link } from 'react-router-dom';

export default class UsernameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codeWarsName: '',
            codeSchoolName: '',// objects for the names
            gitHubName: '',
            showUserDashboard: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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
