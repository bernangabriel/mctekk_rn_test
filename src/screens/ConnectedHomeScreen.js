import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchUsers, logout } from '../actions/user.action'
import HomeScreen from './components/HomeScreen'

const mapStateToProps = state => {
    return {
        users: state.user.users,
        token: state.user.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: bindActionCreators(fetchUsers, dispatch),
        logout: bindActionCreators(logout, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)