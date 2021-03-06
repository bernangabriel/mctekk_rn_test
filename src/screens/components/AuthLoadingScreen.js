import React, { Component } from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { GREEN } from '../../constants/colors'

class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.getToken(this.props.navigation)
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size={30} color={GREEN} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AuthLoadingScreen