# units in React-Native

**Note :** Always prefer using "%" instead of plane values.

```jsx
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: "50%", height: 200, backgroundColor: 'red' }}>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#dadada",
  },
});
```