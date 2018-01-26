import "babel-core/register";
import "babel-polyfill";

const urlForCWData = user => `https://www.codeschool.com/users/${user}.json`;
export default function codeSchoolData(label, callback, userName) {
    fetch(urlForCWData(userName))
        .then(response => {
            if (!response.ok) {
                throw Error("Request Failed")
            }
            return response;
        })
        .then(receivedData => receivedData.json())
        .then(receivedData => {
            return receivedData.courses.completed.map((course) => {
                return course.title;
            });
        })
        .then(titles => {
            callback(titles.includes(label))
        });
}