import { View, Text } from 'react-native'
import React from 'react'

const MyGreeting = (props) => {
    const greeting = () => {
        if(props.ln === "fr"){
            return "Bonjour";
        } else if (props.ln === "es"){
            return "Hola";
        } else {
            return "Hello";
        }
    }
  return (
    <View>
      <Text>{greeting()} {props.name}</Text>
    </View>
  )
}

export default MyGreeting