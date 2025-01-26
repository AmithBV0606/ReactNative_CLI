# All about flex property of CSS :

```jsx
const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row", // main-axis
    justifyContent: "center", // alligns according to main-axis
    alignItems: "center", // allign according to the Y-axis
  },
  box1: {
    width: 80,
    height: 80,
    alignSelf: "flex-start",
    backgroundColor: "red",
  },
  box2: {
    width: 80,
    height: 80,
    backgroundColor: "yellow",
  },
  box3: {
    width: 80,
    height: 80,
    backgroundColor: "green",
  },
});
```

**Note :** 
- "alignItems" property won't work when we use "flexWrap" property.

- When "flexWrap" is used, use "alignContent" instead.