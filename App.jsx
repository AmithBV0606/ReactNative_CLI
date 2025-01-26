// import {
//   Text,
//   Image,
//   Button,
//   TouchableOpacity,
//   Alert,
//   TouchableHighlight,
//   Pressable,
//   SafeAreaView,
//   StyleSheet,
//   useColorScheme,
// } from 'react-native';
// import React from 'react';

// const App = () => {
//   const theme = useColorScheme();

//   console.log(theme); // light or dark based on system theme

//   // Styling using javascript  object :
//   // const styles = {
//   //   text: {
//   //     textAlign: 'center',
//   //     fontSize: 30,
//   //   },
//   //   image: {
//   //     height: 500,
//   //     width: 400,
//   //     borderRadius: 20,
//   //     marginBottom: 20,
//   //   },
//   //   button: {
//   //     marginTop: 20,
//   //     backgroundColor: '#BCB6FF',
//   //     padding: 10,
//   //     borderRadius: 5,
//   //   },
//   //   buttonText: {
//   //     textAlign: 'center',
//   //     color: 'white',
//   //   },
//   // };

//   return (
//     // Inline styling :
//     <SafeAreaView style={{
//         paddingHorizontal: 6, 
//         height: "100%", 
//         width: "100%", 
//         backgroundColor: theme === 'dark' ? "black":"#E4DFDA" 
//       }}
//     >
//       <Text style={[styles.text, { color: theme === 'dark' ? "white":"black" }]}>Hello world!!!</Text>

//       <Image
//         source={{
//           uri: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg',
//         }}
//         style={styles.image}
//       />

//       <Button title="Press Me"></Button>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => Alert.alert('TouchableOpacity button pressed!!!')}>
//         <Text style={[styles.buttonText, { color: theme === 'dark' ? "black":"white" }]}>Click Me</Text>
//       </TouchableOpacity>

//       <TouchableHighlight
//         style={styles.button}
//         onPress={() => Alert.alert('TouchableHighlight button pressed!!!')}>
//         <Text style={[styles.buttonText, { color: theme === 'dark' ? "black":"white" }]}>Click Me</Text>
//       </TouchableHighlight>

//       <Pressable
//         style={[styles.button, { color: theme === 'dark' ? "black":"white" }]}
//         onPress={() => Alert.alert('Pressable button pressed!!!')}>
//         <Text style={[styles.buttonText, { color: theme === 'dark' ? "black":"white" }]}>Hello 👋</Text>
//       </Pressable>
//     </SafeAreaView>
//   );
// };

// export default App;

// // Styles using StyleSheet given by react-native : 
// const styles = StyleSheet.create({
//   text: {
//     textAlign: 'center',
//     fontSize: 30,
//   },
//   image: {
//     height: 500,
//     width: 400,
//     borderRadius: 20,
//     marginBottom: 20,
//   },
//   button: {
//     marginTop: 20,
//     backgroundColor: '#BCB6FF',
//     padding: 10,
//     borderRadius: 5,
//     cursor: "pointer"
//   },
//   buttonText: {
//     textAlign: 'center',
//     color: 'white',
//   },
// });

import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ gap:10 }}
      horizontal
    >
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />

      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />

      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />

      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />

      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />

      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />

      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </ScrollView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 10
  },
  box1: {
    width: 80,
    height: 80,
    backgroundColor: "red",
    borderRadius: '50%',
  },
  box2: {
    width: 80,
    height: 80,
    backgroundColor: "yellow",
    borderRadius: '50%',
  },
  box3: {
    width: 80,
    height: 80,
    backgroundColor: "green",
    borderRadius: '50%',
  },
});