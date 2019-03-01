import { SET_SCHEDULE_MONDAY } from "../constants/index";
export function getData() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            return { type: "DATA_LOADED", payload: json };
        });
}