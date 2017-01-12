import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from "./app";
import SessionFormContainer from "./session_form/session_form_container";
import QuestionDetailContainer from "./question_detail/question_detail_container";
import QuestionIndexContainer from "./question_index/question_index_container";



const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    let currentUser = store.getState().session.currentUser;
    if(currentUser) replace('/');
  };


  return (
    <Provider store={ store }>
      <Router history = { hashHistory }>
        <Route path="/" component= { App }>
          <Route path="/login" component= { SessionFormContainer }
                               onEnter = { _redirectIfLoggedIn } />
          <Route path="/signup" component= { SessionFormContainer }
                               onEnter = { _redirectIfLoggedIn } />
          <Route path="/questions/" component= { QuestionIndexContainer } />
          <Route path="/questions/:questionId" component= { QuestionDetailContainer } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
