import {  GET_US_NEWS } from "../constants";
import { URL } from "../constants";
import axios from 'axios';

export function getNews() {

    return function(dispatch) {
        return axios.get(`${URL}news`)
            .then((res) => {
                dispatch( { type: GET_US_NEWS, payload: res.data });
            }).catch((err)=>{console.log(err)});
    };
}
