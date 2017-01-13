import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';
import { signup, login, logout } from "./actions/session_actions";


// TODO: just for testing
import { fetchQuestionDetail } from './actions/question_actions';

document.addEventListener('DOMContentLoaded', () => {
    let  preloadedState = { session: { currentUser: window.currentUser} };
    const store = (window.currentUser? configureStore(preloadedState) : configureStore());
    window.store = store;
    Modal.setAppElement(document.body);
    const root = document.getElementById('root');
    ReactDOM.render(<Root store= { store }/>, root);
});
