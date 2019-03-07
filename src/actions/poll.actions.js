import {SET_POLL_QUESTION, PUT_POLL_RESULTS, GET_POLL_RESULTS} from "../constants";
import { URL } from "../constants";
import axios from 'axios';

export function setPoll() {
    return function(dispatch) {
        return axios.get(`${URL}getPollQuestion`)
            .then((res) => {
                dispatch( { type: SET_POLL_QUESTION, payload: res.data });
            }).catch((err)=>{console.log(err)});
    };
}

export function getResult() {
    return function(dispatch) {
        return axios.get(`${URL}pollResults`)
            .then((res) => {
                dispatch( { type: GET_POLL_RESULTS, payload: res.data });
            }).catch((err)=>{console.log(err)});
    };
}

export function updatePoll(data) {
    return function(dispatch) {
        return axios.put(`${URL}updatePoll`,{option:data})
            .then((res) => {
                dispatch( { type: PUT_POLL_RESULTS, payload: res.data });
            }).catch((err)=>{console.log(err)});
    };
}

