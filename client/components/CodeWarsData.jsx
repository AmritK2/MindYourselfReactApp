const urlForCWData = username => `https://www.codewars.com/api/v1/users/${username}`;

export default function codeWarsData () {
    fetch(urlForCWData("Amrit2"))
        .then(response => {
            if (!response.ok) {
                throw Error("Request Failed")
            }
            return response
        })
        .then(d => d.json())
        .then(d => {
            console.log(d);
        });
}


