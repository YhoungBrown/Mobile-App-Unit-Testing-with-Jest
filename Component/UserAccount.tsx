import { View, Text, Button } from 'react-native'
import React from 'react'

export type user = {
  id: number,
  name: string,
  isAdmin?: boolean
}

const UserAccount = ({id, name, isAdmin}: user) => {
  return (
    <View>
      {isAdmin && <Button title='Edit'/>}
      <Text>Username : {name}</Text>
    </View>
  )
}

export default UserAccount