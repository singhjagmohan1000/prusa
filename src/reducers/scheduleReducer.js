import { SET_SCHEDULE_MONDAY } from "../constants/index";
import { SET_SCHEDULE_TUESDAY } from "../constants/index";
import { SET_SCHEDULE_WEDNESDAY } from "../constants/index";
import { SET_SCHEDULE_THURSDAY } from "../constants/index";
import { SET_SCHEDULE_FRIDAY } from "../constants/index";
import { SET_SCHEDULE_SATURDAY } from "../constants/index";
import { SET_SCHEDULE_SUNDAY, SET_CURRENT_SHOW } from "../constants/index";
const initialState = {
    schedule_monday: [],
    schedule_tuesday: [],
    schedule_wednesday: [],
    schedule_thursday: [],
    schedule_friday: [],
    schedule_saturday: [],
    schedule_sunday: [],
    current_show: {}
};
export default function scheduleReducer(state = initialState, action) {

    switch (action.type) {
        case SET_SCHEDULE_MONDAY:
            return Object.assign({}, state, {
                schedule_monday: state.schedule_monday.concat(action.payload)
            });
        case SET_SCHEDULE_TUESDAY:
            return Object.assign({}, state, {
                schedule_tuesday: state.schedule_tuesday.concat(action.payload)
            });
        case SET_SCHEDULE_WEDNESDAY:
            return Object.assign({}, state, {
                schedule_wednesday: state.schedule_wednesday.concat(action.payload)
            });
        case SET_SCHEDULE_THURSDAY:
            return Object.assign({}, state, {
                schedule_thursday: state.schedule_thursday.concat(action.payload)
            });
        case SET_SCHEDULE_FRIDAY:
            return Object.assign({}, state, {
                schedule_friday: state.schedule_friday.concat(action.payload)
            });
        case SET_SCHEDULE_SATURDAY:
            return Object.assign({}, state, {
                schedule_saturday: state.schedule_saturday.concat(action.payload)
            });
        case SET_SCHEDULE_SUNDAY:
            return Object.assign({}, state, {
                schedule_sunday: state.schedule_sunday.concat(action.payload)
            });

        case SET_CURRENT_SHOW:
            return Object.assign({}, state, {
                current_show: action.payload
            });
        default:

            return state;
    }
}
