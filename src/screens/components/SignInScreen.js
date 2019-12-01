import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ButtonExtended, SnackBar } from '../../components/common'
import { DARK_GREY, GREEN, WHITE } from '../../constants/colors'

class SignInScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidUpdate() {
        const { token } = this.props
        this.props.navigation.navigate(token ? 'Main' : 'Auth')
    }

    onSignInHandler() {
        const { username, password } = this.state
        this.props.signIn(username, password)
    }

    onSignupHandler() {
        this.props.navigation.navigate('SignUp')
    }

    render() {
        const { error, token, isLoading } = this.props
        this.props.navigation.navigate(token ? 'Main' : 'Auth')

        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Icon name='user-circle' size={100} color={GREEN} />
                </View>
                <View style={{ padding: 20 }}>
                    <ScrollView>
                        <TextInput placeholder='Email'
                            autoCorrect={false}
                            keyboardType='email-address'
                            underlineColorAndroid={DARK_GREY}
                            autoFocus={true}
                            value={this.state.username}
                            onChangeText={(text) => this.setState({ username: text })} />

                        <TextInput placeholder='Password'
                            secureTextEntry={true}
                            underlineColorAndroid={DARK_GREY}
                            value={this.state.password}
                            onChangeText={(text) => this.setState({ password: text })} />

                        <ButtonExtended title='SIGN IN'
                            color={GREEN} textColor={WHITE}
                            style={{ marginTop: 20 }}
                            onPress={() => this.onSignInHandler()} />

                        <View style={styles.signupContainer}>
                            <Text>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => this.onSignupHandler()}>
                                <Text style={styles.signUpLabel}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

                {isLoading && <View>
                    <ActivityIndicator size={30} />
                </View>}
                {error &&
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <SnackBar message={error} />
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        alignItems: 'center',
        paddingTop: 20
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    signUpLabel: {
        fontWeight: 'bold',
        marginLeft: 5
    }
})

export default SignInScreen