import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'



// const imageUrls = [
//   require('../assets/beautifulSetUP.jpg'),
//   require("../assets/catWalking.jpg"),
//   require("../assets/chelseaLovers.jpg"),
//   require("../assets/hamstarPower.jpeg"),
//   require("../assets/TechMind.jpeg"),
//   require("../assets/TenHagTacticals.jpg")
// ]

const ProductImageGallery = ({ imageUrls }: { imageUrls: any[] }) => {

    if(imageUrls.length === 0) return null
  return (
    <View>
      {imageUrls.map((image, index) => (
        <TouchableOpacity 
          key={index}  
          testID={`product-image ${index}`}>
            <Text>Images Here</Text>
            <Image source={image} resizeMode='contain' style={{height: 200, width: 150}}/>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default ProductImageGallery