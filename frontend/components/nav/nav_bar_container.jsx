
import { connect } from 'react-redux';
import NavBar from './greeting.jsx';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ( { session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
