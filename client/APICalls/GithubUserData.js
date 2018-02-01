const githubURL = (user, repo, requestNumber) => `https://api.github.com/repos/${user}/${repo}/pulls/${requestNumber}`;

export default function getCodeReviewState(repoName, userInfo) {
    let requestNumber = "1";
    fetch(githubURL(userInfo.gitHubUsername, repoName, requestNumber))
        .then(receivedResponse => {
            if (!receivedResponse.ok) {
                throw Error("Request Failed")
            }
            return receivedResponse;
        })

        .then(receivedData => receivedData.json())
        .then(receivedData => {
            return receivedData.merged_by !== userInfo.gitHubUsername && receivedData.merged;
        })
}


