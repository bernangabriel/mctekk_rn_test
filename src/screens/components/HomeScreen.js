import React, { Component } from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { WHITE, GREEN } from '../../constants/colors'
import { UserList } from '../../components/user'

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Welcome back',
            headerRight: (
                <Icon name='sign-out' color={WHITE}
                    size={20}
                    style={{ marginRight: 10 }}
                    onPress={() => {
                        navigation.state.params.logout()
                    }} />
            )
        }
    }

    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        const { token } = this.props
        if (!token) {
            this.props.navigation.navigate('Auth')
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({
            logout: this.props.logout
        })
        this.props.fetchUsers()
    }

    render() {
        const { users } = this.props
        return (
            <View style={styles.container}>
                {users.length == 0
                    ? (<View style={styles.loading}>
                        <ActivityIndicator size={50} color={GREEN} />
                        <Text>Loading, please wait...</Text>
                    </View>)
                    : <UserList users={users} />}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeScreen