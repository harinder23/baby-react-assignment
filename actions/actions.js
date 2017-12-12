import * as actionTypes from './actionTypes';

export const modalOpen = (id) => {

    return (dispatch) => {
        dispatch({ type: actionTypes.OPEN_MODAL, payload: id })
    }

}

export const modalClose = () => {
    return(dispatch) => {
        dispatch({ type: actionTypes.CLOSE_MODAL});
    }
}