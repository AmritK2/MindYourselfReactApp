const urlForCWData = username => `https://www.codewars.com/api/v1/users/${username}`;

export default function codeWarsData (challenges, callback) {
    fetch(urlForCWData("Amrit2"))
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

