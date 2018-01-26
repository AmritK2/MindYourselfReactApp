const urlForPullRequest = (user, repo, requestNumber) => `https://api.github.com/repos/${user}/${repo}/pulls/${requestNumber}`;

export default function getCodeReviewState(repoName, callback, userName) {
    let requestNumber = "1";
    // let user = "AmritK2";
    fetch(urlForPullRequest(userName, repoName, requestNumber))
        .then(response => {
            if (!response.ok) {
                throw Error("Request Failed")
            }
            return response;
        })

        .then(receivedData => receivedData.json())
        .then(receivedData => {
            if (receivedData.merged_by != userName){
                callback(receivedData.merged);
            }
        })
}


