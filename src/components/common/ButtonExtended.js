import React from 'react'
import {
    StyleSheet, View,
    Text,
    TouchableNativeFeedback,
    Platform
} from 'react-native'
import PropTypes from 'prop-types'

import { WHITE } from '../../constants/colors'

const ButtonExtended = (props) => {
    const { style, title, color, textColor, onPress } = props
    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View style={[styles.container, { backgroundColor: color }, style]}>
                <Text style={[styles.text], { color: textColor }}>{title}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            android: {
                elevation: 3
            }
        }),
        borderRadius: 5
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: WHITE
    }
})

ButtonExtended.propTypes = {
    title: PropTypes.string.isRequired
}

export default ButtonExtended