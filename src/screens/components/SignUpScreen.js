import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native'
import { DARK_GREY, GREEN, WHITE } from '../../constants/colors'
import { ButtonExtended } from '../../components/common'

class SingUpScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: 'test',
            lastName: 'test',
            email: 'test',
            password: 'test',
            verifyPassword: 'test',
            defaultCompany: 'test_company'
        }
    }

    onSignupHandler = () => {
        const { firstName, lastName, email, password, verifyPassword, defaultCompany } = this.state
        this.props.signUp(firstName, lastName, email, password, verifyPassword, defaultCompany)
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
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
                        onPress={() => this.onSignupHandler()} />

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    commonTextInput: {
        marginBottom: 10
    }
})

export default SingUpScreen