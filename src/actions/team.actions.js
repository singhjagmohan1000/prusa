import { SET_TEAM } from "../constants";
import { URL } from "../constants";
import axios from 'axios';

export function getTeam() {

    return function(dispatch) {
        return axios.get(`${URL}getTeam`)
            .then((res) => {
                dispatch( { type: SET_TEAM, payload: res.data });
            }).catch((err)=>{console.log(err)});
    };
}