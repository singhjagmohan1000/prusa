import { SET_CARD_FLIP, SET_CARD_CLICK, SET_TEAM} from "../constants";
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

export function setCardFlip() {

    return { type: SET_CARD_FLIP, payload: false };
}

export function setCardClick() {

    return { type: SET_CARD_CLICK, paylod: false };
}