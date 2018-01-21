const urlForPullRequest = (user, repo) => `https://api.github.com/repos/${user}/${repo}/pulls/4`;

export default function getCodeReviewState(repoName, callback) {
        fetch(urlForPullRequest("Amrit2", repoName))  //include variable for number
            .then(response => {
                if (!response.ok) {
                    throw Error("Request Failed")
                }
                return response;
            })
            .then(receivedData => receivedData .json())
            .then(receivedData => {
                callback(receivedData.merged);
            })
    }


