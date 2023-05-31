export const setErrorMessage = message => {
    document.getElementById('errorMessage').innerText = message;
};

export const setEventById = (id, event, callBack) => {
    document.getElementById(id).addEventListener(event, callBack)
 }