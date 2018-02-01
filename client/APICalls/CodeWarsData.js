const codeWarsURL = username => `https://www.codewars.com/api/v1/users/${username}`;

export default function codeWarsData (challenges, userInfo) {
    fetch(codeWarsURL(userInfo.codeWarsUsername))
        .then(receivedResponse => {
            if (!receivedResponse.ok) {
                throw Error("Request Failed")
            }
            return receivedResponse
        })
        .then(receivedData => receivedData.json())
        .then(receivedData => {
            return receivedData.codeChallenges.totalCompleted >= challenges;
        });

}


