const urlForPullRequest = (user, repo, requestNumber) => `https://api.github.com/repos/${user}/${repo}/pulls/${requestNumber}`;

export default function getCodeReviewState(repoName, callback) {
    let requestNumber = "1";
    let user = "AmritK2";
    fetch(urlForPullRequest(user, repoName, requestNumber))
        .then(response => {
            if (!response.ok) {
                throw Error("Request Failed")
            }
            return response;
        })

        .then(receivedData => receivedData.json())
        .then(receivedData => {
            if (receivedData.merged_by != user){
                callback(receivedData.merged);
            }
        })
}


