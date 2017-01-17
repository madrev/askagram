import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';
import { searchQuestions } from "./actions/question_actions";


// TODO: just for testing
import { fetchQuestionDetail } from './actions/question_actions';

document.addEventListener('DOMContentLoaded', () => {
    let  preloadedState = { session: { currentUser: window.currentUser} };
    const store = (window.currentUser? configureStore(preloadedState) : configureStore());
    window.store = store;
    window.searchQuestions = searchQuestions;
    Modal.setAppElement(document.body);
    const root = document.getElementById('root');
    ReactDOM.render(<Root store= { store }/>, root);
});
