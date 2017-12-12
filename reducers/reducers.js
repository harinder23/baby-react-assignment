import React from 'react';

const initialState = {
    cardList: [
        { id: 1, name: 'ANTON PETROV', designation: 'General Menager' },
        { id: 2, name: 'KIRL DONCHEV', designation: 'Design Master' },
        { id: 3, name: 'ILIAN BONEV', designation: 'Developer Ninja' },
        { id: 4, name: 'DONI STAMOV', designation: 'Seo Guru' }
    ],
    isModalOpen: false,
};

const reducers = (state = initialState, action) => {
    return state;
}
export default reducers;