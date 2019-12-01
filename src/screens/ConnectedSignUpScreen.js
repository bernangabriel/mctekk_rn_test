import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signUp } from '../actions/user.action'
import SignUpScreen from './components/SignUpScreen'

const mapStateToProps = state => {
    return {
        token: state.user.error,
        error: state.user.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: bindActionCreators(signUp, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)