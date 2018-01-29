const codeWarsURL = username => `https://www.codewars.com/api/v1/users/${username}`;

export default function codeWarsData (challenges, callback, userName) {
    fetch(codeWarsURL(userName))
        .then(receivedResponse => {
            if (!receivedResponse.ok) {
                throw Error("Request Failed")
            }
            return receivedResponse
        })
        .then(receivedData => receivedData.json())
        .then(receivedData => {
            callback(receivedData.codeChallenges.totalCompleted >= challenges);
        });

}


