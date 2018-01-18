const urlGithubUser = user => `https://api.github.com/users/${user}`;
const urlGithubRepo = user =>  `https://api.github.com/users/${user}/repos`;

export default function githubUserData () {
    getUserRepo();

    function GetGitUserProfile() {
        fetch(urlGithubUser("AmritK2"))
            .then(response => {
                if (!response.ok) {
                    throw Error("Request Failed")
                }
                return response;
            })
            .then(d => d.json())
            .then(d => {
                console.log(d);
            })
    }

    function getUserRepo() {
        fetch(urlGithubRepo("AmritK2"))
            .then(response => {
                if (!response.ok) {
                    throw Error("Request Failed")
                }
                return response
            })
            .then(d => d.json())
            .then(d => {
                return d.map((repo) => {
                    return repo.name;
                });
            })
            .then(d => console.log(d))
    }
}


