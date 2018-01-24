import React from 'react';
import {Link} from 'react-router-dom';
import {createUser} from "../APICalls/UserService";

export default class UsernameForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showUserDashboard: false,
            codeSchoolUsername: "",
            codeWarsUsername: "",
            gitHubUsername: "",
            myobId: "1"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        createUser({
            codeSchoolUsername: this.state.codeSchoolUsername,
            codeWarsUsername: this.state.codeWarsUsername,
            gitHubUsername: this.state.gitHubUsername,
            myobId: this.state.myobId,
        });
        this.setState({...this.state, showUserDashboard: true});
    }

    handleCWChange(e) {
        this.setState({...this.state, codeWarsUsername: e.target.value});
    }

    handleCSChange(e) {
        this.setState({...this.state, codeSchoolUsername: e.target.value});
    }

    handleGitChange(e) {
        this.setState({...this.state, gitHubUsername: e.target.value});
    }

    render() {
        return (
            <form className="usernameInput">
                <h2> Start by entering your usernames below</h2>
                <label>
                    Code Wars Username:
                </label>
                <input id="cwname" type="cwname" name="cwname" onChange={this.handleCWChange.bind(this)}
                       value={this.state.codeWarsUsername}/>
                <br/>
                <label>
                    Code School Username:
                </label>
                <input id="csname" type="csname" name="csname" onChange={this.handleCSChange.bind(this)}
                       value={this.state.codeSchoolUsername}/>
                <br/>

                <label>
                    GitHub Username:
                </label>
                <input id="ghname" type="ghname" name="ghname" onChange={this.handleGitChange.bind(this)}
                       value={this.state.gitHubUsername}/>
                <br/>
                <Link to={"/dashboard"}>
                    <button type="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
                </Link>
            </form>
        );
    }
}
