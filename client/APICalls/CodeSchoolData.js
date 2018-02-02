import "babel-core/register";
import "babel-polyfill";

const codeSchoolURL = userInfo => `https://www.codeschool.com/users/${userInfo}.json`;
export default function codeSchoolData(courseRequired, userInfo) {
   return fetch(codeSchoolURL(userInfo.codeSchoolUsername))
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
            return receivedData.courses.completed.map((course) => {
                return course.title;
            });
        })
        .then(titles => {
            return(titles.includes(courseRequired.name));
        });
}