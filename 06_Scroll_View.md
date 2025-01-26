# Scroll-View in React Native :

ScrollView component makes its children items scrollable.

```jsx
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
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  box1: {
    width: 80,
    height: 80,
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