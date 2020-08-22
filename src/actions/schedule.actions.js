import { SET_SCHEDULE_MONDAY } from "../constants/index";
import { SET_SCHEDULE_TUESDAY } from "../constants/index";
import { SET_SCHEDULE_WEDNESDAY } from "../constants/index";
import { SET_SCHEDULE_THURSDAY } from "../constants/index";
import { SET_SCHEDULE_FRIDAY } from "../constants/index";
import { SET_SCHEDULE_SATURDAY } from "../constants/index";
import { SET_SCHEDULE_SUNDAY, SET_CURRENT_SHOW } from "../constants/index";
import { URL } from "../constants/index"
import axios from 'axios';


export function scheduleMonday() {
    return function(dispatch) {
        var sortedschedule=[]
        return axios.get(`${URL}scheduleMonday`)
            .then((res) => {
                var arr = res.data;
                arr.forEach((show,index)=>{
                   let start_time_hours=parseInt(show['start_time'].substr(0,2));
                   let start_time_minutes=parseInt(show['start_time'].substr(2,3));
                   let start_time = new Date(2020,1,1,start_time_hours,start_time_minutes);
                    let daytime = "PM";
                    let currenthour = start_time_hours;
                    if (currenthour < 12) daytime = "AM";
                    if (currenthour === 0) currenthour = 12;
                    if (currenthour > 13) currenthour = currenthour-12;
                    show.start_time=currenthour+":"+show['start_time'].substr(2,3)+" "+daytime;
                    arr[index]={show,time:start_time}
                })
                  sortedschedule = arr.sort((a, b) => a.time - b.time)
            }).then((arr)=>{
                dispatch( { type: SET_SCHEDULE_MONDAY, payload: sortedschedule })}
                )
            .catch((err)=>{console.log(err)})
    };
}

export function scheduleTuesday() {
    return function(dispatch) {
        var sortedschedule=[]
        return axios.get(`${URL}scheduleTuesday`)
            .then((res) => {
                var arr = res.data;
                arr.forEach((show,index)=>{
                    let start_time_hours=parseInt(show['start_time'].substr(0,2));
                    let start_time_minutes=parseInt(show['start_time'].substr(2,3));
                    let start_time = new Date(2020,1,1,start_time_hours,start_time_minutes);
                    let daytime = "PM";
                    let currenthour = start_time_hours;
                    if (currenthour < 12) daytime = "AM";
                    if (currenthour === 0) currenthour = 12;
                    if (currenthour > 13) currenthour = currenthour-12;
                    show.start_time=currenthour+":"+show['start_time'].substr(2,3)+" "+daytime;
                    arr[index]={show,time:start_time}
                })
                sortedschedule = arr.sort((a, b) => a.time - b.time)
            }).then((arr)=>{
                dispatch( { type: SET_SCHEDULE_TUESDAY, payload: sortedschedule })}
            )
            .catch((err)=>{console.log(err)})
    };
}

export function scheduleWednesday() {
    return function(dispatch) {
        var sortedschedule=[]
        return axios.get(`${URL}scheduleWednesday`)
            .then((res) => {
                var arr = res.data;
                arr.forEach((show,index)=>{
                    let start_time_hours=parseInt(show['start_time'].substr(0,2));
                    let start_time_minutes=parseInt(show['start_time'].substr(2,3));
                    let start_time = new Date(2020,1,1,start_time_hours,start_time_minutes);
                    let daytime = "PM";
                    let currenthour = start_time_hours;
                    if (currenthour < 12) daytime = "AM";
                    if (currenthour === 0) currenthour = 12;
                    if (currenthour > 13) currenthour = currenthour-12;
                    show.start_time=currenthour+":"+show['start_time'].substr(2,3)+" "+daytime;
                    arr[index]={show,time:start_time}
                })
                sortedschedule = arr.sort((a, b) => a.time - b.time)
            }).then((arr)=>{
                dispatch( { type: SET_SCHEDULE_WEDNESDAY, payload: sortedschedule })}
            )
            .catch((err)=>{console.log(err)})
    };
}

export function scheduleThursday() {
    return function(dispatch) {
        var sortedschedule=[]
        return axios.get(`${URL}scheduleThursday`)
            .then((res) => {
                var arr = res.data;
                arr.forEach((show,index)=>{
                    let start_time_hours=parseInt(show['start_time'].substr(0,2));
                    let start_time_minutes=parseInt(show['start_time'].substr(2,3));
                    let start_time = new Date(2020,1,1,start_time_hours,start_time_minutes);
                    let daytime = "PM";
                    let currenthour = start_time_hours;
                    if (currenthour < 12) daytime = "AM";
                    if (currenthour === 0) currenthour = 12;
                    if (currenthour > 13) currenthour = currenthour-12;
                    show.start_time=currenthour+":"+show['start_time'].substr(2,3)+" "+daytime;
                    arr[index]={show,time:start_time}
                })
                sortedschedule = arr.sort((a, b) => a.time - b.time)
            }).then((arr)=>{
                dispatch( { type: SET_SCHEDULE_THURSDAY, payload: sortedschedule })}
            )
            .catch((err)=>{console.log(err)})
    };
}

export function scheduleFriday() {
    return function(dispatch) {
        var sortedschedule=[]
        return axios.get(`${URL}scheduleFriday`)
            .then((res) => {
                var arr = res.data;
                arr.forEach((show,index)=>{
                    let start_time_hours=parseInt(show['start_time'].substr(0,2));
                    let start_time_minutes=parseInt(show['start_time'].substr(2,3));
                    let start_time = new Date(2020,1,1,start_time_hours,start_time_minutes);
                    let daytime = "PM";
                    let currenthour = start_time_hours;
                    if (currenthour < 12) daytime = "AM";
                    if (currenthour === 0) currenthour = 12;
                    if (currenthour > 13) currenthour = currenthour-12;
                    show.start_time=currenthour+":"+show['start_time'].substr(2,3)+" "+daytime;
                    arr[index]={show,time:start_time}
                })
                sortedschedule = arr.sort((a, b) => a.time - b.time)
            }).then((arr)=>{
                dispatch( { type: SET_SCHEDULE_FRIDAY, payload: sortedschedule })}
            )
            .catch((err)=>{console.log(err)})
    };
}

export function scheduleSaturday() {
    return function(dispatch) {
        var sortedschedule=[]
        return axios.get(`${URL}scheduleSaturday`)
            .then((res) => {
                var arr = res.data;
                arr.forEach((show,index)=>{
                    let start_time_hours=parseInt(show['start_time'].substr(0,2));
                    let start_time_minutes=parseInt(show['start_time'].substr(2,3));
                    let start_time = new Date(2020,1,1,start_time_hours,start_time_minutes);
                    // let time=start_time_hours+":"+start_time_minutes+" "+daytime;
                    let daytime = "PM";

                    let currenthour = start_time_hours;
                    if (currenthour < 12) daytime = "AM";
                    if (currenthour === 0) currenthour = 12;
                    if (currenthour > 13) currenthour = currenthour-12;
                    show.start_time=currenthour+":"+show['start_time'].substr(2,3)+" "+daytime;
                    arr[index]={show,time:start_time}


                })
                sortedschedule = arr.sort((a, b) => a.time - b.time)

            }).then((arr)=>{
                dispatch( { type: SET_SCHEDULE_SATURDAY, payload: sortedschedule })}
            )
            .catch((err)=>{console.log(err)})
    };
}

export function scheduleSunday() {
    return function(dispatch) {
        var sortedschedule=[]
        return axios.get(`${URL}scheduleSunday`)
            .then((res) => {
                var arr = res.data;
                arr.forEach((show,index)=>{
                    let start_time_hours=parseInt(show['start_time'].substr(0,2));
                    let start_time_minutes=parseInt(show['start_time'].substr(2,3));
                    let start_time = new Date(2020,1,1,start_time_hours,start_time_minutes);

                    // let time=start_time_hours+":"+start_time_minutes+" "+daytime;
                    let daytime = "PM";

                    let currenthour = start_time_hours;
                    if (currenthour < 12) daytime = "AM";
                    if (currenthour === 0) currenthour = 12;
                    if (currenthour > 13) currenthour = currenthour-12;
                    show.start_time=currenthour+":"+show['start_time'].substr(2,3)+" "+daytime;
                    arr[index]={show,time:start_time}


                })
                sortedschedule = arr.sort((a, b) => a.time - b.time)

            }).then((arr)=>{
                dispatch( { type: SET_SCHEDULE_SUNDAY, payload: sortedschedule })}
            )
            .catch((err)=>{console.log(err)})
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