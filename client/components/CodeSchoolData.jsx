import "babel-core/register";
import "babel-polyfill";

const urlForCWData = user => `https://www.codeschool.com/users/${user}.json`;

export default async function codeSchoolData(label) {
    let courses = await fetch(urlForCWData("AmritK2"))
        .then(response => {
            if (!response.ok) {
                throw Error("Request Failed")
            }
            return response;
        })
        .then(d => d.json())
        .then(d => {
            return d.courses.completed.map((course) => {
                return course.title;
            });
        });
    return courses.includes(label);
}