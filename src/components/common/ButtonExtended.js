import React from 'react'
import {
    StyleSheet, View,
    Text,
    TouchableNativeFeedback,
    Platform,
    ActivityIndicator
} from 'react-native'
import PropTypes from 'prop-types'

import { WHITE } from '../../constants/colors'

const ButtonExtended = (props) => {
    const { style, title, color, textColor, isLoading, onPress } = props
    return (
        <TouchableNativeFeedback onPress={onPress} disabled={isLoading}>
            <View style={[styles.container, { backgroundColor: color }, style]}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[styles.text], { color: textColor }}>{title}</Text>
                </View>
                <View style={{ alignItems: 'flex-end', width: 5 }}>
                    {isLoading && (
                        <ActivityIndicator color={WHITE} />
                    )}
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        padding: 10,
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