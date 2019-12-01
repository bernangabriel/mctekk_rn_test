import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signIn } from '../actions/user.action'
import SignInScreen from './components/SignInScreen'

const mapStateToProps = state => {
    return {
        users: state.user.users,
        user: state.user.user,
        isLoading: state.user.isLoading,
        error: state.user.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: bindActionCreators(signIn, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)