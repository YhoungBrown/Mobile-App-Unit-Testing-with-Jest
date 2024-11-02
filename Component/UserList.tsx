import { View, Text } from 'react-native'
import React from 'react'
import { user } from './UserAccount'

type userListProp = {
    Users: user[]; 
}

const UserList = ({Users} : userListProp) => {
    if(Users.length === 0) return <Text>No User Found</Text> 

  return (
    <View>
        {Users.map(user => (
            <View key={user.id}>
                <Text>{user.id}</Text>
                <Text>{`users / ${user.id} , ${user.name}`}</Text>
            </View>
        ))}
      <Text>UserList</Text>
    </View>
  )
}

export default UserList