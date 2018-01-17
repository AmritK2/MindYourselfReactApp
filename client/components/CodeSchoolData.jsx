const urlForCWData = user => `https://www.codeschool.com/users/${user}.json`;

export default function codeSchoolData() {
    let data = [];
    fetch(urlForCWData("AmritK2"))
        .then(response => {
            if (!response.ok) {
                throw Error("Request Failed")
            }
            return response;
        })
        .then(d => d.json())
        .then(d => {
            data.push(d);
            const completedCourses = d.courses.completed.map((course) => {
                return course.title;
            });
            console.log(completedCourses);
        });
}