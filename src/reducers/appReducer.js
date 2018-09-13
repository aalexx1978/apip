import initialState from './initialState';
import {FETCH_DATA, RECEIVE_DATA, SHOW_MODAL, ERROR} from '../actions/allActions';

export default function appRed(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA:
            console.log('FETCH_DATA');
            return {...state, action};
        case RECEIVE_DATA:
            console.log('RECEIVE_DATA');
            return {...state, phones: action.phones};
        case SHOW_MODAL:
            return {...state, detail: action.detail, modal: action.modal};
        case ERROR:
            return {...state, error: true, msg: action.msg};
        default:
            return state;
    }
}