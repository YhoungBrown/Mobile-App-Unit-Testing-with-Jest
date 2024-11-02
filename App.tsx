// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import ProductImageGallery from './Component/ProductImageGallery';
// import { imageUrls } from './constants/ImageConstant';
// import TermsAndConditions from './Component/TermsAndConditions';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <Text>Hey i'm here today</Text>
//       {/* <ProductImageGallery imageUrls={imageUrls}/> */}
//      * <TermsAndConditions onPress={} text=''/>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import TermsAndConditions from './Component/TermsAndConditions';
import { imageUrls } from './constants/ImageConstant';
import ProductImageGallery from './Component/ProductImageGallery';

export default function App() {
  // Define the onPress function
  const handleAgree = () => {
    Alert.alert("Terms Accepted", "You have agreed to the terms and conditions.");
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Hey, I'm here today</Text>
      
      {/* Pass the onPress handler and text */}
      <TermsAndConditions 
        onPress={handleAgree} 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio." 
      />
  <ScrollView>
      <ProductImageGallery imageUrls={imageUrls}/>
  </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
