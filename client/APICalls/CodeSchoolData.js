import "babel-core/register";
import "babel-polyfill";

const codeSchoolURL = username => `https://www.codeschool.com/users/${username}.json`;
export default function codeSchoolData(label, callback, userName) {
    fetch(codeSchoolURL(userName))
        .then(receivedResponse => {
            if (!receivedResponse.ok) {
                throw Error("Request Failed")
            }
            return receivedResponse;
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