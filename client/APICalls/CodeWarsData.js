const codeWarsURL = username => `https://www.codewars.com/api/v1/users/${username}`;

export default function codeWarsData (label, userInfo) {
    return fetch(codeWarsURL(userInfo.codeWarsUsername))
        .then(receivedResponse => {
            if (!receivedResponse.ok) {
                throw Error("Request Failed")
            }
            return receivedResponse
        })
        .then(receivedData => {
            return receivedData.json()
        })
        .then(receivedData => {
            return receivedData.codeChallenges.totalCompleted >= label.challengeCount;
        });
}


