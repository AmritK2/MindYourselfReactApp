const githubURL = (user, repo, requestNumber) => `https://api.github.com/repos/${user}/${repo}/pulls/${requestNumber}`;

export default function getCodeReviewState(repoName, callback, userName) {
    let requestNumber = "1";
    fetch(githubURL(userName, repoName, requestNumber))
        .then(receivedResponse => {
            if (!receivedResponse.ok) {
                throw Error("Request Failed")
            }
            return receivedResponse;
        })

        .then(receivedData => receivedData.json())
        .then(receivedData => {
            if (receivedData.merged_by !== userName){
                callback(receivedData.merged);
            }
        })
}


