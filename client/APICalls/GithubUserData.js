const githubURL = (user, repo, requestNumber) => `https://api.github.com/repos/${user}/${repo}/pulls/${requestNumber}`;

export default function getCodeReviewState(repoName, userInfo) {
    let requestNumber = "1"; // need to automate
    return fetch(githubURL(userInfo.gitHubUsername, repoName.name, requestNumber))
        .then(receivedResponse => {
            if (!receivedResponse.ok) {
                throw Error("Request Failed")
            }
            return receivedResponse;
        })
        .then(receivedData => {
            return receivedData.json()
        })
        .then(receivedData => {
            return receivedData.merged_by !== userInfo.gitHubUsername && receivedData.merged;
        })
}


