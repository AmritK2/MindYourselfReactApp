const urlForCWData = userName => `https://www.codewars.com/api/v1/users/${userName}`;

export default function codeWarsData (challenges, callback, userName) {
    fetch(urlForCWData(userName))
        .then(response => {
            if (!response.ok) {
                throw Error("Request Failed")
            }
            return response
        })
        .then(receivedData => receivedData.json())
        .then(receivedData => {
            callback(receivedData.codeChallenges.totalCompleted >= challenges);
        });

}


