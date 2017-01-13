import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, login, logout } from "./actions/session_actions";
import { sendToCloudinary } from './util/question_api_util.js';


// TODO: just for testing
import { fetchQuestionDetail } from './actions/question_actions';

document.addEventListener('DOMContentLoaded', () => {
    let  preloadedState = { session: { currentUser: window.currentUser} };
    // const cl = cloudinary.Cloudinary.new(window.CLOUDINARY_OPTIONS);
    // window.cloudinary = cloudinary;
    // window.cl = cl;
    // $.cloudinary.config(window.CLOUDINARY_OPTIONS);
    const store = (window.currentUser? configureStore(preloadedState) : configureStore());
    window.store = store;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store= { store }/>, root);
});
