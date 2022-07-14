// make method of sessionStorage

export default function setSession(key, value) {
    return window.sessionStorage.setItem(key, value);
}

export default function getSession(key) {
    return window.sessionStorage.getItem(key);
}