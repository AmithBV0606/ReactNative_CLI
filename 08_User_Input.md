# Handling User Input 

```jsx
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [isName, setIsName] = useState(false);
  // const [isSubmitting, setIsSubmitting] = useState("");

  const handlePress = () => {
    setIsName(prev => !prev);
    // setSubmitting(name);
    // setName("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, please Sign Up</Text>

      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        // onChangeText={text => setName(text)}
        onChangeText={setName}
        value={name}
        multiline
        numberOfLines={3}
      />

      <Button title="Submit" onPress={handlePress} />

      <Button
        title="Clear"
        color={'red'}
        onPress={() => {
          setName('');
          setIsName(false);
        }}
        />

      <Text>Result : {isName ? name : ''}</Text>
      {/* {isSubmitting && (<Text>Result : {isSubmitting}</Text>)} */}

      {/* Usage of numberofLines property */}
      <Text numberOfLines={2}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officia molestias temporibus ipsum iste. Quisquam assumenda facere delectus? Fuga necessitatibus doloremque natus aliquid! Consectetur, animi?
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    padding: 20,
    gap: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
  },
});
```