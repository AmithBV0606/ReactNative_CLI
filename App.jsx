import {
  Text,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  Pressable,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React from 'react';

const App = () => {
  // Styling using javascript  object :
  // const styles = {
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
  //   },
  //   buttonText: {
  //     textAlign: 'center',
  //     color: 'white',
  //   },
  // };

  return (
    // Inline styling :
    <SafeAreaView style={{marginHorizontal: 'auto'}}>
      <Text style={styles.text}>Hello world!!!</Text>

      <Image
        source={{
          uri: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg',
        }}
        style={styles.image}
      />

      <Button title="Press Me"></Button>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('TouchableOpacity button pressed!!!')}>
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={styles.button}
        onPress={() => Alert.alert('TouchableHighlight button pressed!!!')}>
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableHighlight>

      <Pressable
        style={styles.button}
        onPress={() => Alert.alert('Pressable button pressed!!!')}>
        <Text style={styles.buttonText}>Hello 👋</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

// Styles using StyleSheet given by react-native : 
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 30,
  },
  image: {
    height: 500,
    width: 400,
    borderRadius: 20,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#BCB6FF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});