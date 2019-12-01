import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AuthLoadingScreen from './components/AuthLoadingScreen'
import { getToken } from '../actions/user.action'

const mapStateToProps = state => {
    return {
        token: state.user.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getToken: bindActionCreators(getToken, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen)