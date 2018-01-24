const userAPI = "https://m01ikd6d68.execute-api.ap-southeast-1.amazonaws.com/dev/users";
const createUser = user => {
    fetch(userAPI, {
        method: "post",
        body: JSON.stringify(user)
    }).then((response) => {
        if (response.status !== 200) {
            console.log(response);
        }
        else {
            console.log("User Added");
        }
    }).catch((error) => {
        throw error;
    })
};

export {createUser};