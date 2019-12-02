import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { DARK_GREY, LIGHT_GREY } from '../../constants/colors'
import PropTypes from 'prop-types'

const User = (props) => {
    const { id, firstName, displayName, email } = props
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Icon name='user-circle' size={30} color={DARK_GREY} />
            </View>
            <View style={styles.body}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Text style={{ flex: 1, fontSize: 15, fontWeight: 'bold' }}>
                        {firstName.toUpperCase()}  {displayName.toUpperCase()}
                    </Text>
                    <Text style={{ justifyContent: 'flex-end', fontSize: 8 }}>
                        {id}
                    </Text>
                </View>
                <Text style={{ fontSize: 13 }}>{email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: LIGHT_GREY,
        borderBottomWidth: 1,
        marginBottom: 5
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    body: {
        flex: 1,
        padding: 5,
        marginBottom: 5
    }
})

User.propTypes = {
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}

export default User