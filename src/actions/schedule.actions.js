import { SET_SCHEDULE_MONDAY } from "../constants/index";
import { SET_SCHEDULE_TUESDAY } from "../constants/index";
import { SET_SCHEDULE_WEDNESDAY } from "../constants/index";
import { SET_SCHEDULE_THURSDAY } from "../constants/index";
import { SET_SCHEDULE_FRIDAY } from "../constants/index";
import { SET_SCHEDULE_SATURDAY } from "../constants/index";
import { SET_SCHEDULE_SUNDAY } from "../constants/index";
import axios from 'axios';
const url = process.env.NODE_ENV === 'production' ? "/api/" : "localhost:8080/api/";

export function scheduleMonday() {
    return function(dispatch) {
        return axios.get(`${url}scheduleMonday`)
            .then(response => response.json())
            .then(json => {
                return { type: SET_SCHEDULE_MONDAY, payload: json };
            }).catch((err)=>{console.log(err)});
    };
}

export function scheduleTuesday() {
    return function(dispatch) {
        return axios.get(`${url}scheduleTuesday`)
            .then(response => response.json())
            .then(json => {
                return { type: SET_SCHEDULE_TUESDAY, payload: json };
            }).catch((err)=>{console.log(err)});
    };
}

export function scheduleWednesday() {
    return function(dispatch) {
        return axios.get(`${url}scheduleWednesday`)
            .then(response => response.json())
            .then(json => {
                return { type: SET_SCHEDULE_WEDNESDAY, payload: json };
            }).catch((err)=>{console.log(err)});
    };
}

export function scheduleThursday() {
    return function(dispatch) {
        return axios.get(`${url}scheduleThursday`)
            .then(response => response.json())
            .then(json => {
                return { type: SET_SCHEDULE_THURSDAY, payload: json };
            }).catch((err)=>{console.log(err)});
    };
}

export function scheduleFriday() {
    return function(dispatch) {
        return axios.get(`${url}scheduleFriday`)
            .then(response => response.json())
            .then(json => {
                return { type: SET_SCHEDULE_FRIDAY, payload: json };
            }).catch((err)=>{console.log(err)});
    };
}

export function scheduleSaturday() {
    return function(dispatch) {
        return axios.get(`${url}scheduleSaturday`)
            .then(response => response.json())
            .then(json => {
                return { type: SET_SCHEDULE_SATURDAY, payload: json };
            }).catch((err)=>{console.log(err)});
    };
}

export function scheduleSunday() {
    return function(dispatch) {
        return axios.get(`${url}scheduleSunday`)
            .then(response => response.json())
            .then(json => {
                return { type: SET_SCHEDULE_SUNDAY, payload: json };
            }).catch((err)=>{console.log(err)});
    };
}