import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            // ES6 way of concatenating data, w/ the 3 dots
            return [action.payload.data, ...state];
            break;
    }
    return state;
}
