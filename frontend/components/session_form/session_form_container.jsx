import { connect } from 'react-redux';
import SessionForm from './session_form.jsx';
import { signup, login, demoLogin, clearErrors } from "../../actions/session_actions";



const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  formType: (ownProps.location ? ownProps.location.pathname.slice(1) : 'signup')
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => {
    const formType = ownProps.location.pathname.slice(1);
    if(formType === 'signup') return dispatch(signup(user));
    else return dispatch(login(user));
  },
  demoLogin: () => dispatch(demoLogin()),
  clearErrors: () => dispatch(clearErrors())
  });

  export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
