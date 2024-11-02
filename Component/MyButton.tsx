import { View, Text, Button } from 'react-native'
import React from 'react'



const MyButton = (props) => {
  return (
    <View>
      <Button 
        testID="firstButton"
        title='i got clicked'
        onPress={props.onPress}
      />
    </View>
  )
}

export default MyButton