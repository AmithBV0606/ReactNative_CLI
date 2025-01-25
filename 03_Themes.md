# Themes based styling 

### useColorScheme :

- The `useColorScheme` React hook provides and subscribes to color scheme updates from the Appearance module. 

- The return value indicates the current user preferred color scheme. 

- The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle).

### Supported color schemes

- `light` : The user prefers a light color theme.
- `dark` : The user prefers a dark color theme.
- `null` : The user has not indicated a preferred color theme.

### Usage : 
```jsx
const App = () => {
  const theme = useColorScheme();

  console.log(theme); // light or dark based on system theme

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme === 'dark' ? "black":"#E4DFDA"}]}
    >
      <Text style={[styles.text, { color: theme === 'dark' ? "white":"black" }]}>Hello world!!!</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
    container : {
        marginHorizontal: 'auto', 
        height: "100%", 
        width: "100%"
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
    },
});
```

**Note :** Toggle the theme from the settings to see the effect on the screen.