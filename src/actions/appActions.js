import * as allActions from './allActions';
import axios from 'axios';

export function receiveData(data) {
    return {type: allActions.RECEIVE_DATA, phones: data};
}

export function showModal(modal, detail) {
    return {type: allActions.SHOW_MODAL, modal: modal, detail: detail};
}

export function isError(data) {
    return {type: allActions.ERROR, msg: data};
}

export function fetchData() {
    return (dispatch) => {
        console.log('FETCH_DATA');
        axios.get('http://localhost:3003/phones').catch(function (error) {
            dispatch(isError(error))
        })
            .then(response => {
                if (typeof response != 'undefined' && response.status === 200) {
                    dispatch(receiveData(response.data))
                } else {
                    dispatch(isError({message: "ERROR: server couldn't be reached"}))
                    console.log('ERROR FETCHING DATA...')
                }
            });

    };
}