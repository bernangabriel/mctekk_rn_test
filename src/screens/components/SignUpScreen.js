import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView, TextInput, ActivityIndicator } from 'react-native'
import { DARK_GREY, GREEN, WHITE } from '../../constants/colors'
import { ButtonExtended, SnackBar } from '../../components/common'

class SingUpScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            verifyPassword: '',
            defaultCompany: ''
        }
    }

    onSignupHandler = () => {
        const { firstName, lastName, email, password, verifyPassword, defaultCompany } = this.state
        this.props.signUp(firstName, lastName, email, password, verifyPassword, defaultCompany, this.props.navigation)
    }

    render() {
        const { isLoading, error } = this.props
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ padding: 20 }}>
                        <TextInput style={styles.commonTextInput}
                            placeholder='First name'
                            underlineColorAndroid={DARK_GREY}
                            autoCorrect={false}
                            value={this.state.firstName}
                            onChangeText={(value) => this.setState({ firstName: value })} />

                        <TextInput style={styles.commonTextInput}
                            placeholder='Last name'
                            underlineColorAndroid={DARK_GREY}
                            value={this.state.lastName}
                            onChangeText={(value) => this.setState({ lastName: value })} />

                        <TextInput style={styles.commonTextInput}
                            placeholder='Email'
                            underlineColorAndroid={DARK_GREY}
                            keyboardType='email-address'
                            value={this.state.email}
                            onChangeText={(value) => this.setState({ email: value })} />

                        <TextInput style={styles.commonTextInput}
                            placeholder='Password'
                            underlineColorAndroid={DARK_GREY}
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={(value) => this.setState({ password: value })} />

                        <TextInput style={styles.commonTextInput}
                            placeholder='Verify password'
                            underlineColorAndroid={DARK_GREY}
                            secureTextEntry={true}
                            value={this.state.verifyPassword}
                            onChangeText={(value) => this.setState({ verifyPassword: value })} />

                        <TextInput style={styles.commonTextInput}
                            placeholder='Default company'
                            underlineColorAndroid={DARK_GREY}
                            value={this.state.defaultCompany}
                            onChangeText={(value) => this.setState({ defaultCompany: value })} />

                        <ButtonExtended title='SIGN UP'
                            color={GREEN}
                            textColor={WHITE}
                            onPress={() => this.onSignupHandler()}
                            isLoading={isLoading} />
                    </View>
                    {error.length > 0 && (
                        <View style={{ flex: 1, padding: 20, justifyContent: 'flex-end' }}>
                            <SnackBar message={error} />
                        </View>
                    )}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    commonTextInput: {
        marginBottom: 10
    }
})

export default SingUpScreen