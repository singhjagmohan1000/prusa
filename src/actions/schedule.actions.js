import { SET_SCHEDULE_MONDAY } from "../constants/index";
import { SET_SCHEDULE_TUESDAY } from "../constants/index";
import { SET_SCHEDULE_WEDNESDAY } from "../constants/index";
import { SET_SCHEDULE_THURSDAY } from "../constants/index";
import { SET_SCHEDULE_FRIDAY } from "../constants/index";
import { SET_SCHEDULE_SATURDAY } from "../constants/index";
import { SET_SCHEDULE_SUNDAY, SET_CURRENT_SHOW } from "../constants/index";
import { URL } from "../constants/index"
import axios from 'axios';


export function setscheduleMonday() {

    return function(dispatch) {
        return axios.get(`${URL}scheduleMonday`)
            .then((res) => {
                dispatch( { type: SET_SCHEDULE_MONDAY, payload: res.data });
            }).catch((err)=>{console.log(err)});
    };
}


export function scheduleTuesday() {
    return function(dispatch) {
        return axios.get(`${URL}scheduleTuesday`)
            .then((res) => {
                dispatch( { type: SET_SCHEDULE_TUESDAY, payload: res.data });
            }).catch((err)=>{console.log(err)});
    };
}

export function scheduleWednesday() {
    return function(dispatch) {
        return axios.get(`${URL}scheduleWednesday`)
            .then((res) => {
                dispatch({ type: SET_SCHEDULE_WEDNESDAY, payload: res.data });
            }).catch((err)=>{console.log(err)});
    };
}

export function scheduleThursday() {
    return function(dispatch) {
        return axios.get(`${URL}scheduleThursday`)
            .then((res) => {
                dispatch({ type: SET_SCHEDULE_THURSDAY, payload: res.data });
            }).catch((err)=>{console.log(err)});
    };
}

export function scheduleFriday() {
    return function(dispatch) {
        return axios.get(`${URL}scheduleFriday`)
            .then((res) => {
                dispatch({ type: SET_SCHEDULE_FRIDAY, payload: res.data });
            }).catch((err)=>{console.log(err)});
    };
}

export function scheduleSaturday() {
    return function(dispatch) {
        return axios.get(`${URL}scheduleSaturday`)
            .then((res) => {
                dispatch({ type: SET_SCHEDULE_SATURDAY, payload: res.data });
            }).catch((err)=>{console.log(err)});
    };
}

export function scheduleSunday() {
    return function(dispatch) {
        return axios.get(`${URL}scheduleSunday`)
            .then((res) => {
                dispatch({ type: SET_SCHEDULE_SUNDAY, payload: res.data });
            }).catch((err)=>{console.log(err)});
    };
}

export function currentShow() {
    return function(dispatch) {
        return axios.get(`${URL}currentShow`)
            .then((res) => {
                dispatch({ type: SET_CURRENT_SHOW, payload: res.data });
            }).catch((err)=>{console.log(err)});
    };
}