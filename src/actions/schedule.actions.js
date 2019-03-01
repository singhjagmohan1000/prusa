import { SET_SCHEDULE_MONDAY } from "../constants/index";
import { SET_SCHEDULE_TUESDAY } from "../constants/index";
import { SET_SCHEDULE_WEDNESDAY } from "../constants/index";
import { SET_SCHEDULE_THURSDAY } from "../constants/index";
import { SET_SCHEDULE_FRIDAY } from "../constants/index";
import { SET_SCHEDULE_SATURDAY } from "../constants/index";
import { SET_SCHEDULE_SUNDAY } from "../constants/index";
import axios from 'axios';
const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:8080/api/";

export function setscheduleMonday() {

    return function(dispatch) {
        return axios.get(`${url}scheduleMonday`)
            .then((res) => {
                dispatch( { type: SET_SCHEDULE_MONDAY, payload: res.data });
            }).catch((err)=>{console.log(err)});
    };
}


export function scheduleTuesday() {
    return function(dispatch) {
        return axios.get(`${url}scheduleTuesday`)
            .then((res) => {
                dispatch( { type: SET_SCHEDULE_TUESDAY, payload: res.data });
            }).catch((err)=>{console.log(err)});
    };
}

export function scheduleWednesday() {
    return function(dispatch) {
        return axios.get(`${url}scheduleWednesday`)
            .then((res) => {
                dispatch({ type: SET_SCHEDULE_WEDNESDAY, payload: res.data });
            }).catch((err)=>{console.log(err)});
    };
}

export function scheduleThursday() {
    return function(dispatch) {
        return axios.get(`${url}scheduleThursday`)
            .then((res) => {
                dispatch({ type: SET_SCHEDULE_THURSDAY, payload: res.data });
            }).catch((err)=>{console.log(err)});
    };
}

export function scheduleFriday() {
    return function(dispatch) {
        return axios.get(`${url}scheduleFriday`)
            .then((res) => {
                dispatch({ type: SET_SCHEDULE_FRIDAY, payload: res.data });
            }).catch((err)=>{console.log(err)});
    };
}

export function scheduleSaturday() {
    return function(dispatch) {
        return axios.get(`${url}scheduleSaturday`)
            .then((res) => {
                dispatch({ type: SET_SCHEDULE_SATURDAY, payload: res.data });
            }).catch((err)=>{console.log(err)});
    };
}

export function scheduleSunday() {
    return function(dispatch) {
        return axios.get(`${url}scheduleSunday`)
            .then((res) => {
                dispatch({ type: SET_SCHEDULE_SUNDAY, payload: res.data });
            }).catch((err)=>{console.log(err)});
    };
}