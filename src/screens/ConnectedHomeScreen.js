import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchUser, logout } from '../actions/user.action'
import HomeScreen from './components/HomeScreen'

const mapStateToProps = state => {
    return {
        users: state.user.users,
        token: state.user.token,
        isLoading: state.user.isLoading,
        error: state.user.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: bindActionCreators(fetchUser, dispatch),
        logout: bindActionCreators(logout, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)