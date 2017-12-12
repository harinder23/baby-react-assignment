import React from 'react';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cardList: [
        { id: 1, name: 'ANTON PETROV', designation: 'General Menager' },
        { id: 2, name: 'KIRL DONCHEV', designation: 'Design Master' },
        { id: 3, name: 'ILIAN BONEV', designation: 'Developer Ninja' },
        { id: 4, name: 'DONI STAMOV', designation: 'Seo Guru' }
    ],
    isModalOpen: false,
    opened : {}
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_MODAL:
            return {
                ...state, isModalOpen: true, opened : {...state.cardList[action.payload]}
            };
        case actionTypes.CLOSE_MODAL:
        console.log(state);
            return {
                ...state, isModalOpen: false, opened : {}
            }
        default:
            return state;
    }
}
export default reducers;