import React, { Component } from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { WHITE, GREEN } from '../../constants/colors'
import { UserList } from '../../components/user'
import { SnackBar } from '../../components/common'

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

        //pass logout action to navigationOptions
        this.props.navigation.setParams({
            logout: this.props.logout
        })

        //fetch user data
        this.props.fetchUser()
    }

    render() {
        const { isLoading, error, users } = this.props
        return (
            <View style={styles.container}>
                {users.length > 0
                    ? <UserList users={users} />
                    : (<ActivityIndicator size={30} />)
                }

                {error.length > 0 && (
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <SnackBar message={error} />
                    </View>
                )}
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