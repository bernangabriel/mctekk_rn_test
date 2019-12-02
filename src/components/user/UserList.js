import React from 'react'
import { FlatList, Text } from 'react-native'
import User from './User'

const UserList = (props) => {
    const { users } = props
    return (
        <FlatList
            data={users}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => (
                <User id={item.id}
                    firstName={item.firstname}
                    displayName={item.displayname}
                    email={item.email} />
            )} />
    )
}

export default UserList