import {
    GET_US_NEWS
} from "../constants";

const initialState = {
    news: []
};
export default function teamReducer(state = initialState, action) {
    switch (action.type) {
        case GET_US_NEWS:
            return Object.assign({}, state, {
                news: state.news.concat(action.payload.items)
            });

        default:

            return state;
    }

}
