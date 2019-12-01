import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { BLACK, WHITE } from '../../constants/colors'
import Icon from 'react-native-vector-icons/FontAwesome'

const SnackBar = (props) => {
    const { message } = props
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Icon name='exclamation-circle' size={20} color={'red'} />
            </View>
            <View style={styles.body}>
                <Text style={styles.message}>{message}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: BLACK,
        padding: 10,
        flexDirection: 'row'
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    message: {
        color: WHITE,
        fontSize: 13
    }
})

export default SnackBar