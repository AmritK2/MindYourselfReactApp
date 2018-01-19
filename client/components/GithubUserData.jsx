const urlForPullRequest = (user, repo) => `https://api.github.com/repos/${user}/${repo}/pulls/4`;
const urlGithubRepo = user =>  `https://api.github.com/users/${user}/repos`;

export default function githubUserData () {
    getUserRepo();
    getPullRequestNumber();

    function getPullRequestNumber() {
        fetch(urlForPullRequest("Amrit2", "testrepo"))  //variable for number - aashiq is alright
            .then(response => {
                if (!response.ok) {
                    throw Error("Request Failed")
                }
                return response;
            })
            .then(d => d.json())
            .then(d => {
                console.log(d.merged);
            })
    }

    function getUserRepo() {
        fetch(urlGithubRepo("Amrit2"))
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


