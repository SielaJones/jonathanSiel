
const keyUser = "user";

function storeUser(user) {
    localStorage.setItem(keyUser, JSON.stringify(user));
}

function loadUser(defaultValue = null) {
    return JSON.parse(localStorage.getItem(keyUser)) || defaultValue;
}


export {storeUser, loadUser}