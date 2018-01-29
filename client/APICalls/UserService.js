const putUserData = "https://m01ikd6d68.execute-api.ap-southeast-1.amazonaws.com/dev/users";
const getUserData = loginID => `https://m01ikd6d68.execute-api.ap-southeast-1.amazonaws.com/dev/users/${loginID}`;

const createUser = user => {
    fetch(putUserData, {
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
// // const getMyobIdFromGraphExplorer

const getUserInfo = () => {
    return fetch(getUserData(1)).then((response) => {
        if (!response.ok) {
            throw Error("Request Failed")
        }
        return response.json();
    }).then(response => {
        return response;
    }).catch((error) => {
        console.log(error);
        throw error;
    })
};


export {createUser};
export {getUserInfo};